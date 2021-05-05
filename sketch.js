function checkInput(){
  var inputusername = document.getElementById("usernametext").value;
  var inputpassword = document.getElementById("passwordtext").value;
  var inputdate = document.getElementById("date").value;
  let possibleLogins = [
    {
      username: "Kefir101Awesome",
      password: 101,
      date: "2004-11-24",
    },
    {
      username: "The_Cyber_Shadow",
      password: 34,
      date: "2005-04-16",
    },
    {
      username: "Savta",
      password: 1946,
      date: "1946-01-01",
    },
  ];
  let correct = false;
  possibleLogins.forEach(login =>{
    if((inputusername == login.username) && (inputpassword == login.password) && (inputdate == login.date)){
      correct = true;
    }
  });
  if(correct){
    window.location= "/account.html";
    console.log("login correct!");
  }else if(!correct){
    var tag = document.createElement("h3");
    var text = document.createTextNode("Try again!");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
    setTimeout(() => {  element.removeChild(tag);; }, 1000);
  }
  //alert(`username is ${username} and password is ${password}`);
}
function changeColor(color){
  document.body.style.background = color;
}
var stopped = false;
function changeLink(){
  const link = document.querySelector('.song');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  //link.classList.toggle('classname'); (adds/removes class)
}
function disable(){
  let p5 = document.getElementById('p5');
  p5.src = "random.js";  
  console.log(p5);
  let h1 = document.getElementById('h1');
  h1.class = "game"; 
  console.log(h1);
}
function undo(){
  if(stopped){
    start();
  }else if(!stopped){
    stop();
  }
}
function stop(){
  stopped = true;
  noLoop();
}
function start(){
  stopped = false;
  loop();
}

let ballList = [];
const ballSize = 12;
let ballScore = 0;
let size = 300;
let balls = 800;

function setSize(s) {
  // let S = s + "px";
  let S = random(10, 500) + "px";
  console.log(document.getElementById("defaultCanvas0").style.width);
  document.getElementById("defaultCanvas0").style.width = S;
  document.getElementById("defaultCanvas0").style.height = S;
  //size = s;
}

function setup() {
  for (let i = 15; i < size; i += 15) {
    for (let j = 15; j < size; j += 15) {
      let c = color(random(0, 255), random(0, 255), random(0, 255));
      let b = new ball(i, j, 0, 0, ballSize, c);
      ballList.push(b);
    }
  }
  createCanvas(size, size);
}

function draw() {
  background(220);
  fill(0);
  for (let i = 0; i < ballList.length; i++) {
    let ball = ballList[i];
    let x = ball.x;
    let y = ball.y;
    for (let j = 0; j < ballList.length; j++) {
          let jball = ballList[j];
          if (i != j) {
            if (ballInsideBall(x, y, jball.x, jball.y) || ballHitBall(x, y, jball.x, jball.y)) {
              if (ballInsideBall(x, y, jball.x, jball.y)) {
                let xDist = x - jball.x;
                let yDist = y - jball.y;
                let phi;
                if (xDist == 0) {
                  phi = PI / 2;
                } else {
                  phi = atan(-yDist / xDist);
                }
                let move = ballSize - findDist(x, y, jball.x, jball.y);
                jball.x += move * cos(phi);
                jball.y -= move * sin(phi);
              }
              let tempballxSpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v1x");
              let tempballySpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v1y");
              let tempjballxSpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v2x");
              let tempjballySpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v2y");
              ball.xSpeed = tooSmall(tempballxSpeed);
              ball.ySpeed = tooSmall(tempballySpeed);
              jball.xSpeed = tooSmall(tempjballxSpeed);
              jball.ySpeed = tooSmall(tempjballySpeed);
            }else{
              if (findDist(x, y, mouseX, mouseY) <= (2 * ballSize + ballSize) / 2) {
                ball.xSpeed = random(-3, 3);
                ball.ySpeed = random(-3, 3);
              }
            }
          }
    }
    ball.move();
    ball.reverse();
    ball.show();
  }
  fill(0);
  ellipse(mouseX, mouseY, 2 * ballSize);
}

class ball {
  constructor(x, y, xSpeed, ySpeed, d, color) {
    // this.size = ballSize;
    // this.r = ballSize / 2;
    // this.x = random(this.r, size - this.r);
    // this.y = random(this.r, size - this.r);
    // this.xSpeed = random(-10, 10);
    // this.ySpeed = random(-10, 10);
    //this.color = color(random(255), random(255), random(255))
    this.size = d;
    this.r = size / 2;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = color;
  }
  show() {
    fill(this.color);
    strokeWeight(0);
    ellipse(this.x, this.y, this.size);
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  reverse() {
    if (this.x - this.r < 0 || this.x + this.r > size) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y - this.r < 0 || this.y + this.r > size) {
      this.ySpeed = -this.ySpeed;
    }
  }
}

function ballHitBall(x1, y1, x2, y2) {
  if ((findDist(x1, y1, x2, y2) < ballSize)) {
    return true;
  }
  return false;
}

function ballInsideBall(x1, y1, x2, y2) {
  if ((findDist(x1, y1, x2, y2) < ballSize - 1)) {
    return true;
  }
  return false;
}

function findDist(x1, y1, x2, y2) {
  let xDist = x1 - x2;
  let yDist = y1 - y2;
  let dist = sqrt(xDist * xDist + yDist * yDist);
  return dist;
}

function tooSmall(x) {
  if (abs(x) <= (0.00001)) {
    return 0;
  }
  return x;
}

function findVelocity(x1, y1, x2, y2, xSpeed1, ySpeed1, xSpeed2, ySpeed2, speed) {
  let xDist = x1 - x2;
  let yDist = y1 - y2;
  let phi = 0;
  if (xDist == 0) {
    phi = PI / 2;
  } else {
    phi = atan(-yDist / xDist);
  }
  let v1 = sqrt((xSpeed1 * xSpeed1) + (ySpeed1 * ySpeed1));
  let v2 = sqrt((xSpeed2 * xSpeed2) + (ySpeed2 * ySpeed2));
  let theta1 = findangles(xSpeed1, -ySpeed1);
  let theta2 = findangles(xSpeed2, -ySpeed2);
  let velocity = 0;
  switch (speed) {
    case "v1x":
      velocity = (v2 * cos(theta2 - phi) * cos(phi)) + (v1 * sin(theta1 - phi) * cos((phi + (PI * 0.5))));
      break;
    case "v1y":
      velocity = -((v2 * cos(theta2 - phi) * sin(phi)) + (v1 * sin(theta1 - phi) * sin((phi + (PI * 0.5)))));
      break;
    case "v2x":
      velocity = (v1 * cos(theta1 - phi) * cos(phi)) + (v2 * sin(theta2 - phi) * cos((phi + (PI * 0.5))));
      break;
    case "v2y":
      velocity = -((v1 * cos(theta1 - phi) * sin(phi)) + (v2 * sin(theta2 - phi) * sin((phi + (PI * 0.5)))));
  }
  return velocity;
}

function findangles(xSpeed, ySpeed) {
  let angle = 0;
  if (xSpeed < 0) {
    angle = PI + atan(ySpeed / xSpeed);
  } else if (xSpeed > 0 & ySpeed >= 0) {
    angle = atan(ySpeed / xSpeed);
  } else if (xSpeed > 0 && ySpeed < 0) {
    angle = 2 * PI + atan(ySpeed / xSpeed);
  } else if (xSpeed == 0 && ySpeed == 0) {
    angle = 0;
  } else if (xSpeed == 0 && ySpeed >= 0) {
    angle = PI / 2;
  } else {
    angle = 1.5 * PI;
  }
  return round(angle * 1000 * 180 / PI) / 1000 * PI / 180;
}