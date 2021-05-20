
function checkInput() {
  var inputusername = document.getElementById("usernametext").value;
  var inputpassword = document.getElementById("passwordtext").value;
  var inputdate = document.getElementById("date").value;
  let possibleLogins = [
    // {
    //   username: "Kefir101Awesome",
    //   password: 101,
    //   date: "2004-01-01",
    // },
    // {
    //   username: "The_Cyber_Shadow",
    //   password: 34,
    //   date: "2005-01-01",
    // },
    // {
    //   username: "Savta",
    //   password: 1945,
    //   date: "1945-01-01",
    // },
    // {
    //   id: "/mothersday.html",
    //   username: "Mom",
    //   password: "loveyou",
    //   date: "1972-05-09"
    {
      username: "memes",
      password: "goodpswd",
      date: "2021-01-01"
    }
  ];
  let correct = false;
  possibleLogins.forEach(login => {
    if ((inputusername == login.username) && (inputpassword == login.password) && (inputdate == login.date)) {
      correct = true;
    }
  });
  if (correct) {
    window.location = "/memes.html";
    console.log("login correct!");
  } else if (!correct) {
    var tag = document.createElement("h3");
    var text = document.createTextNode("Try again!");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
    setTimeout(() => { element.removeChild(tag);; }, 1000);
  }
  //alert(`username is ${username} and password is ${password}`);
}
var cookies = 0;
var startClicking = true; 
function clicked() {
  cookies++;
  startClicking = true; //doesnt affect value in addTime for some reason
  var element = document.getElementById("cookiep2");
  element.innerHTML = "Cookies: " + cookies;
}
const cpstimer = document.getElementById('cpstimer');
var sec = 0;
function addTime(){
  if(startClicking){
    sec++;
    cpstimer.innerHTML = "Cookies clicked per second: " + Math.round(cookies/sec);
    setTimeout("addTime()", 1000);
  }
}
function changeColor(color) {
  document.body.style.background = color;
}
var stopped = false;
function changeLink() {
  const link = document.querySelector('.song');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  //link.classList.toggle('classname'); (adds/removes class)
}
function disable() {
  let p5 = document.getElementById('p5');
  p5.src = "random.js";
  let h1 = document.getElementById('h1');
  h1.class = "game";
}
function undo() {
  if (stopped) {
    start();
  } else if (!stopped) {
    stop();
  }
}
function stop() {
  stopped = true;
  noLoop();
}
function start() {
  stopped = false;
  loop();
}

function setButtonColor() {
  let doc = document.getElementsByClassName("btn");
  for (let i = 0; i < document.querySelectorAll('.btn').length; i++) {
    doc[i].style.backgroundColor = doc[i].id;
  }
}

window.onload = function () {
  setButtonColor();
  addTime();
};

// document.onkeydown = function(e) {
//   console.log(1);
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }
//right click inspect
document.addEventListener('contextmenu', function(e) {
  //e.preventDefault();
});
//middle button scrolling
document.addEventListener("mousedown", function(e){ if(e.button == 1){ e.preventDefault(); } });

//let ballList = [];
//const ballSize = 12;
//let ballScore = 0;
//let size = 300;
//let balls = 800;
const size = 1040, width = size, height = size / 2;
const w = width, h = height;
const ballSize = 40;
let ballScore = 0;
const balls = 15;
let poolBallList = [];
let poolBallColorList = [];
let startx = 750, starty = 260;
let poolBallXList = Array.of(startx -300, startx - 600, startx + 40 - 350, startx + 35, startx + 70, startx + 70, startx + 105, startx + 105, startx + 70, startx + 105, startx + 105, startx + 140, startx + 140, startx + 140, startx + 140, startx + 140);
let poolBallYList = Array.of(starty, starty, starty - 20 + 20, starty + 20, starty - 40, starty + 40, starty - 60, starty - 20, starty, starty + 20, starty + 60, starty - 80, starty - 40, starty, starty + 40, starty + 80);
let yellow = 0;
let blue = 0;
let red = 0;
let purple = 0;
let orange = 0;
let green = 0;
let burgundy = 0;
let feltGreen = 0;
let white = 0;
let black = 0;
let cueColor = 0;
let newmouseX, newmouseY;
let powerlength = 297;
let timeElapsed = 0, frames = 60;
let totaltime = -1;
let multiplayer = -1;
let difficulty = -1;
let showInstructions = true, canSwap = true, play = true, pause = false;
let ready, gameOver, won, instructionPage;
let showIns;
let buttonList = [];
let _mousePressed = false;
let cueStick;
let spacebarPressed;
function setSize(s) {
  // let S = s + "px";
  let S = random(10, 500) + "px";
  // document.getElementById("defaultCanvas0").style.width = S;
  // document.getElementById("defaultCanvas0").style.height = S;
  //size = s;
}

function setup() {
  yellow = color(255, 255, 0);
  blue = color(0, 0, 255);
  red = color(255, 0, 0);
  purple = color(255, 0, 255);
  orange = color(255, 94, 19);
  green = color(0, 100, 0);
  burgundy = color(128, 0, 32);
  feltGreen = color(76, 145, 65);
  white = color(255);
  black = color(0);
  cueColor = color(202, 164, 114);
  cueStick = loadImage('/img/cuestick.png');
  poolBallColorList = Array.of(white, yellow, blue, red, purple, orange, green, burgundy, black, yellow, blue, red, purple, orange, green, burgundy);
  showIns = new Buttons(1030, (height * 0.5), 20, 20, "", color(255, 0, 0));
  for (let i = 0; i < balls; i++) {
    let p = (new PoolBall(poolBallXList[i], poolBallYList[i], 0, 0, ballSize, poolBallColorList[i]));
    poolBallList.push(p);
  }
  let offset = 50;
  let exitGame = new Buttons(w / 10, (h / 1.1), 100, 50, "Exit", color(50));
  let solo = new Buttons(w / 3 + 150, h / 4, 100, 50, "Solo", color(0, 100, 0));
  let multiplayer = new Buttons(w / 3 + 275, h / 4, 100, 50, "Multi", color(0, 100, 0));
  let beginner = new Buttons(w / 2, (h / 1.40) - 2 * offset, 200, 50, "Beginner", color(0, 100, 0));
  let intermediate = new Buttons(w / 2, (h / 1.35) - offset, 200, 50, "Intermediate", color(255, 255, 0));
  let advanced = new Buttons(w / 2, (h / 1.30), 200, 50, "Advanced", color(255, 0, 0));
  let instructions = new Buttons(4 * w / 5, (h / 1.5), 240, 60, "Instructions", color(128, 0, 32));
  let startGame = new Buttons(w / 2, (h / 1.25) + offset, 300, 50, "Start the game!", color(255, 0, 255));
  buttonList = Array.of(exitGame, solo, multiplayer, beginner, intermediate, advanced, instructions, startGame);
  createCanvas(width, height);
}

function draw() {
  frameRate(frames);
  if (newmouseX != mouseX && newmouseY != mouseY) {
    // console.log("mouseX: " + mouseX);
    // console.log("mouseY: " + mouseY);
  }
  newmouseX = mouseX;
  newmouseY = mouseY;
  if (instructionPage) {
    document.getElementById("billiardbtn").style.display = "none";
    background(128);
    textSize(50);
    textAlign(CENTER);
    text("INSTRUCTIONS: ", w / 2, h / 8);
    textSize(16);
    textAlign(LEFT);
    text("There are 2 player modes and 3 difficulty levels if you choose to play single-player!" + '\n'
      + "The difficulty levels determine how much time you will have: 300, 200, and 100 seconds, " + '\n'
      + "and this is the time allotted to get all your balls inside the pockets (not including the cue ball or 8 ball)" + '\n'
      + "If you finish in time, you win, else, you lose!" + '\n'
      + "If the multiplayer option is selected, you will go head to head with another player" + '\n'
      + "and try to get all your balls in before your opponent! Good luck!", 20, h / 5);
    text("The user features are as follows: " + '\n'
      + "Hold the left/right mouse button to change cue stick power when it is your turn " + '\n'
      + "(keep in mind that you can only hit the cue ball when it has stopped), " + '\n'
      + "click the middle mouse button (or spacebar) to release cue stick and launch the ball, " + '\n'
      + "press s to freeze/unfreeze game, and press r to reset table, score, and timer" + '\n'
      + "Optional: Up/Down arrow keys to increase the frame-rate to a minimum of 1 and maximum of 60 frames per second", 20, h / 2 + 50);
    fill(0);
    rectMode(CENTER);
    rect(70, 45, 80, 30);
    fill(255);
    textSize(22);
    text("Return", 33, 55);
    if (clickedRectangle(mouseX, mouseY, 70, 45, 80, 30)) {
      instructionPage = false;
    }
  } else if (play) {
    document.getElementById("billiardbtn").style.display = "none";
    //timeElapsed += map(frames, 0, 60, 0, 1);
    drawBackground();
    if (multiplayer == 0) {
      timeElapsed += (1 / frames);
      let timeLeft = totaltime - timeElapsed;
      if (timeLeft <= 0 || ballScore == balls - 1) {
        gameOver = true;
        play = false;
        if (ballScore == balls - 1) {
          won = true;
        }
      } else {
        timer(timeLeft);
      }
    }
    textSize(15);
    drawButton(showIns.x, showIns.y, showIns.width, showIns.height, showIns.key, showIns.color);
    if (clickedRectangle(showIns.x, showIns.y, mouseX, mouseY, showIns.width, showIns.height) && canSwap) {
      showInstructions = !showInstructions;
      canSwap = false;
    }
    textAlign(LEFT);
    textSize(15);
    if (showInstructions) {
      text("Hold the left/right mouse button to change cue stick power, " + '\n' +
        "click the middle mouse button (or spacebar) to release cue stick, " + '\n' +
        "press s to freeze/unfreeze game, and press r to reset table", 100, 100);
      text("Billiard Score: " + ballScore + '\n' + "Frames: " + frames, 100, 180);
    } else {
      text("Billiard Score: " + ballScore + '\n' + "Frames: " + frames, 100, 100);
    }
    for (let i = 0; i < poolBallList.length; i++) {
      let ball = poolBallList[i];
      if (ball.inPocket == 1) {
        ballScore++;
      }
      let x = ball.x;
      let y = ball.y;
      ball.show();
      ball.frictionLoss();
      if (i > 0) {
        fill(255);
        ellipse(x, y, 15, 15);
        if (i > 8) {
          fill(255);
          arc(x, y + 10, (0.8 * ballSize), ballSize / 2, 0, PI);
          arc(x, y - 10, (0.8 * ballSize), ballSize / 2, PI, 2 * PI);
        }
        fill(0);
        if (i > 8) {
          textSize(8);
          text(i, x - 5, y + 3);
        } else {
          textSize(10);
          text(i, x - 3, y + 3);
        }
      } else { //i == 0 
        let distx, disty;
        textSize(20);
        fill(black);
        distx = (mouseX - x);
        disty = -(mouseY - y);
        let angle = atan((disty / distx));
        if (distx < 0 && disty > 0) {
          angle = angle + PI;
        }
        if (distx < 0 && disty < 0) {
          angle = angle + PI;
        }
        if (distx > 0 && disty < 0) {
          angle = angle + 2 * PI;
        }
        if (abs(ball.xSpeed) < 1E-3 && abs(ball.ySpeed) < 1E-3) {
          fill(cueColor);
          rectMode(CORNERS);
          push();
          translate(x, y);
          rotate(-findangles((mouseX - x), -(mouseY - y)));
          let width = 100;
          //rect(ballSize / 2, -width / 2, powerlength, width / 2);
          image(cueStick, ballSize / 2, -width / 2, ballSize / 2 + powerlength, width);
          pop();
          rectMode(CORNER);
          if (_mousePressed) {
            switch (mouseButton) {
              case RIGHT:
                if (powerlength < 300) {
                  powerlength += 3;
                }
                break;
              case LEFT:
                if (powerlength > 3 + ballSize / 2 + 3) {
                  powerlength -= 3;
                }
                break;
              case CENTER:
                ball.xSpeed = powerlength / 13 * cos(PI - angle);
                ball.ySpeed = powerlength / 13 * sin(PI - angle);
              //frames = 1;
              //console.log(ball.xSpeed);
            }
          } else if (spacebarPressed) {
            ball.xSpeed = powerlength / 13 * cos(PI - angle);
            ball.ySpeed = powerlength / 13 * sin(PI - angle);
            spacebarPressed = false;
          }
        }
      }
      for (let j = 0; j < poolBallList.length; j++) {
        let jball = poolBallList[j];
        if (ball.inPocket == 0 && jball.inPocket == 0 && i != j) {
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
              let move = (ballSize - findDist(x, y, jball.x, jball.y))*0.5;
              // if(ball.x > jball.x){
              //   console.log("phi " + phi);
              //   console.log(ball.x);
              //   ball.x += move * cos(phi);
              //   console.log(ball.x);
              //   jball.y -= move * sin(phi);
              // }else{
              //   ball.x -= move * cos(phi);
              //   jball.y += move * sin(phi);
              // }
              // if(Math.random() > 0.5 && false){
              //   jball.x += move * cos(phi);
              //   jball.y -= move * sin(phi);
              // }else{
              //   jball.x += move * cos(phi);
              //   jball.y -= move * sin(phi);
              // }
              jball.x -= move * cos(phi);
              jball.y += move * sin(phi);
              ball.x += move * cos(phi);
              ball.y -= move * sin(phi);
              ball.friction = 1;
              jball.friction = 1;
              ellipse(x, y, 3, 3);
              ellipse(jball.x, jball.y, 3, 3);
              // console.log(findDist(x, y, jball.x, jball.y));
            }else{
              ball.friction = 0.03;
              jball.friction = 0.03;
            }
            x = ball.x;
            y = ball.y;
            let tempballxSpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v1x");
            let tempballySpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v1y");
            let tempjballxSpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v2x");
            let tempjballySpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v2y");
            ball.xSpeed = tooSmall(tempballxSpeed);
            ball.ySpeed = tooSmall(tempballySpeed);
            jball.xSpeed = tooSmall(tempjballxSpeed);
            jball.ySpeed = tooSmall(tempjballySpeed);
          }
        }
      }
    }
    for (let i = 0; i < poolBallList.length; i++) {
      let ball = poolBallList[i];
      if(i == 0){
        ball.reverse();
        // if(ball.xSpeed != 0 && ball.ySpeed != 0) console.log(ball.xSpeed, ball.ySpeed);
      }else{
        ball.reverseAndFall();
      }
      ball.move();
      // console.log(ball.xSpeed, ball.x)
      if(_mousePressed && mouseButton == LEFT && findDist(ball.x, ball.y, mouseX, mouseY) < ballSize/2){
        console.log(ball.xSpeed, ball.ySpeed);
      }
    }
    if (keyIsPressed == true) {
      if (key == 'ArrowUp' && frames <= 57) {
        frames += 3;
      } else if (key == 'ArrowDown' && frames >= 13) {
        frames -= 3;
      } else if (key == ' ') {
        spacebarPressed = true;
      }else if (key == 'c'){
        //console.clear();
      }
    }
  } else if (!gameOver) {
    background(128);
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text("Play Billiards!", w / 2, h / 10);
    textAlign(LEFT);
    text("Choose a mode:", w / 3 - 150, h / 4 + 8);
    text("If solo, select difficulty: ", w / 13, h / 1.7);
  } else if (gameOver) {
    document.getElementById("billiardbtn").style.display = "none";
    background(128);
    textSize(100);
    fill(0);
    textAlign(CENTER);
    if (won) {
      text("You won! Congrats!", w / 2, h / 2);
    } else {
      text("You lost! Too bad!", w / 2, h / 2);
    }
  }
}

function clickedBilliardButton(id) {
  let key = id;
  if (key == "instructionsbtn") {
    instructionPage = true;
    return 0;
  }
  if (key == "startbtn" && ready) {
    play = true;
    return 0;
  }
  if (multiplayer == 0) {
    ready = true;
    if (key == "beginnerbtn") {
      difficulty = 0;
      totaltime = 300;
    } else if (key == "intermediatebtn") {
      difficulty = 1;
      totaltime = 200;
    } else if (key == "advancedbtn") {
      difficulty = 2;
      totaltime = 100;
    } else {
      ready = false;
    }
  }
  if (key == "solobtn") {
    multiplayer = 0;
  } else if (key == "multibtn") {
    multiplayer = 1;
    ready = true;
  }
}

class PoolBall {
  constructor(x, y, xSpeed, ySpeed, d, color) {
    // this.size = ballSize;
    // this.r = ballSize / 2;
    // this.x = random(this.r, size - this.r);
    // this.y = random(this.r, size - this.r);
    // this.xSpeed = random(-10, 10);
    // this.ySpeed = random(-10, 10);
    //this.color = color(random(255), random(255), random(255))
    this.d = d;
    this.r = d / 2;
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = color;
    this.inPocket = 0;
    this.wall = 20;
    this.xpath = [];
    this.ypath = [];
    this.friction = 0.03;
  }
  show() {
    fill(this.color);
    strokeWeight(0);
    ellipse(this.x, this.y, this.d, this.d);
    for(let i = 0; i < this.xpath.length; i++){
      ellipse(this.xpath[i], this.ypath[i], 3, 3)
    }
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // this.xpath.push(this.x);
    // this.ypath.push(this.y);
  }
  frictionLoss() {
    let friction = this.friction;
    let angle = atan(this.ySpeed/this.xSpeed);
    let frictionx = abs(friction*cos(angle));
    let frictiony = abs(friction*sin(angle));
    if(abs(this.xSpeed) <= frictionx){
      this.xSpeed = 0;
    }
    if(abs(this.ySpeed) <= frictiony){
      this.ySpeed = 0;
    }
    if (this.xSpeed > 0) {
      this.xSpeed -= frictionx;
    } else if (this.xSpeed < 0) {
      this.xSpeed += frictionx;
    }
    if (this.ySpeed > 0) {
      this.ySpeed -= frictiony;
    } else if (this.ySpeed < 0) {
      this.ySpeed += frictiony;
    }
  }
  reverseAndFall() {
    let x = this.x;
    let y = this.y;
    let r = this.r;
    let w = this.wall;
    let b = ballSize / 2;
    if ((x < 40 || x > width - 40) && (y < 40 || y > height - 40) || Math.hypot(x-width/2, y-25) <= 13 || Math.hypot(x-width/2, y-(height-25)) <= 13) {
      this.xSpeed = 0;
      this.ySpeed = 0;
      if (x < 40 && y < 40) {
        x = 25;
        y = 25;
      } else if (x < 40 && y > height - 40) {
        x = 25;
        y = height - 25;
      } else if (x > width - 40 && y < 40) {
        x = width - 25;
        y = 25;
      } else if (x > width - 40 && y > height - 40) {
        x = width - 25;
        y = height - 25;
      } else if(Math.hypot(x-width/2, y-25) <= 13){
        x = width/2;
        y = 25;
      } else if(Math.hypot(x-width/2, y-(height-25)) <= 13){
        x = width/2;
        y = height - 25;
      }
      this.x = x;
      this.y = y;
      this.inPocket++;
    } else {
      // if(x <= 15 || y <= 15 || x >= 1025 || y >= 525){
      //   this.reset();
      // }else
      if (x <= 15 + b || x >= 1025 - b || y <= 15 + b || y >= 525 - b) {
        let xshift = 25;
        let yshift = 25;
        console.log("should shift");
        if (x <= 15 + b || x >= 1025 - b) {
          if (abs(this.xSpeed) >= 10) this.xSpeed *= -0.5;
          else this.xSpeed *= -1;
          if (x <= 15 + b) {
            xshift = w + r - x;
          } else {
            xshift = x - (width - w - r);
          }
        }
        if (x <= 15 + b) {
          x += xshift;
          console.log(x);
        } else if (x >= 1025 - b) {
          if (xshift == x - (width - w - r)) {
            x -= xshift;
            console.log(x);
          } else x -= xshift;
        }
        if (y <= 15 + b || y >= 525 - b) {
          if (abs(this.ySpeed) >= 10) this.ySpeed *= -0.5;
          else this.ySpeed *= -1;
          if (y <= 15 + b) {
            yshift = w + r - y;
          } else {
            yshift = y - (height - w - r);
          }
        }
        if (y <= 15 + b) {
          y += yshift;
        } else if (y >= 525 - b) {
          y -= yshift;
        }
        this.x = x;
        this.y = y;
      } else {
        if ((x < (w + r)) || x > (width - w - r)) {
          this.xSpeed *= -1;
        }
        if ((y < (w + r)) || y > (height - w - r)) {
          this.ySpeed *= -1;
        }
      }
    }
  }
  reverse() {
    let x = this.x;
    let y = this.y;
    let r = this.r;
    let w = this.wall;
    let b = ballSize / 2;
    if (x <= 15 + b || x >= 1025 - b || y <= 15 + b || y >= 525 - b) {
      let xshift = 25;
      let yshift = 25;
      console.log("should shift");
      if (x <= 15 + b || x >= 1025 - b) {
        if (abs(this.xSpeed) >= 10) this.xSpeed *= -0.5;
        else this.xSpeed *= -1;
        if (x <= 15 + b) {
          xshift = w + r - x;
        } else {
          xshift = x - (width - w - r);
        }
      }
      if (x <= 15 + b) {
        x += xshift;
      } else if (x >= 1025 - b) {
        if (xshift == x - (width - w - r)) {
          x -= xshift;
        } else x -= xshift;
      }
      if (y <= 15 + b || y >= 525 - b) {
        if (abs(this.ySpeed) >= 10) this.ySpeed *= -0.5;
        else this.ySpeed *= -1;
        if (y <= 15 + b) {
          yshift = w + r - y;
        } else {
          yshift = y - (height - w - r);
        }
      }
      if (y <= 15 + b) {
        y += yshift;
      } else if (y >= 525 - b) {
        y -= yshift;
      }
      this.x = x;
      this.y = y;
    } else {
      if ((x < (w + r)) || x > (width - w - r)) {
        this.xSpeed *= -1;
      }
      if ((y < (w + r)) || y > (height - w - r)) {
        this.ySpeed *= -1;
      }
    }
  }
  reset() {
    this.x = this.ox;
    this.y = this.oy;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.xpath = [];
    this.ypath = [];
  }
}

function ballHitBall(x1, y1, x2, y2) {
  if ((findDist(x1, y1, x2, y2) < ballSize)) {
    return true;
  }
  return false;
}

function ballInsideBall(x1, y1, x2, y2) {
  console.log(ballSize-2)
  if ((findDist(x1, y1, x2, y2) < ballSize - 2)) {
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

function findSlope(x1, y1, x2, y2) {
  let xDist = x1 - x2;
  let yDist = y1 - y2;
  return yDist / xDist;
}

class Buttons {
  constructor(x, y, width, height, key, color) {
    this.key = key;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}

function timer(timeLeft) {
  stroke(feltGreen);
  rectMode(CORNER);
  fill(feltGreen);
  rect(w / 2 - 100, h / 8 - 25, 200, 30);
  stroke(0);
  fill(0);
  textSize(20);
  let requiredLength = 6;
  if (timeLeft < 1) {
    requiredLength = 3;
  } else if (timeLeft < 10) {
    requiredLength = 4;
  } else if (timeLeft < 100) {
    requiredLength = 5;
  }
  let stimeLeft = (Math.floor(timeLeft * 100) / 100).toString();
  if (stimeLeft.length < requiredLength) {
    stimeLeft += "0";
  }
  text("Time left: " + stimeLeft, w / 2, h / 8);
}

function drawBackground() {
  rectMode(CORNER);
  //background
  background(feltGreen);
  strokeWeight(0);
  fill(42, 23, 11);
  rect(0, 0, 20, height);
  rect(width - 20, 0, 20, height);
  rect(0, 0, width, 20);
  rect(0, height - 20, width, 20);
  //holes
  fill(black);
  strokeWeight(4);
  stroke(42, 23, 11);
  ellipse(25, 25, 50, 50);
  ellipse(width - 25, height - 25, 50, 50);
  ellipse(25, height - 25, 50, 50);
  ellipse(width - 25, 25, 50, 50);
  ellipse(width/2, 25, 50, 50);
  ellipse(width/2, height-25, 50, 50);
  strokeWeight(0);
  stroke(0);
}

function drawButton(x, y, width, height, key, color) {
  fill(color);
  rectMode(CENTER);
  rect(x, y, width, height);
  fill(0);
  textSize(height * 0.6);
  textAlign(CENTER);
  text(key, x, y + height / 4);
}

function keyReleased() {
  if (key == 'r') {
    //poolBallXList.clear();
    //poolBallYList.clear();
    for (let i = 0; i < poolBallList.length; i++) {
      poolBallList[i].reset();
    }
    // console.log(poolBallList[0].xSpeed, poolBallList[0].ySpeed)
    ballScore = 0;
    // frames = 60;
    timeElapsed = 0;
    spacebarPressed = false;
  } else if (key == 's') {
    pause = !pause;
    PAUSE();
  }
}

function PAUSE() {
  if (pause) {
    noLoop();
  } else {
    loop();
  }
}

function clickedRectangle(x1, y1, x2, y2, width, height) {
  return (hoverRectangle(x1, y1, x2, y2, width, height) && _mousePressed);
}

function hoverRectangle(x1, y1, x2, y2, width, height) {
  x2 = x2 - width / 2;
  y2 = y2 - height / 2;
  return ((x1 > x2) && (x1 < (x2 + width)) && (y1 > y2) && (y1 < (y2 + height)));
}

function mouseReleased() {
  canSwap = true;
  _mousePressed = false;
}

function mousePressed() {
  _mousePressed = true;
}