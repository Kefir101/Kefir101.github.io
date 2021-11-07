var counter = 0;
var colorcounter = 0;
let magnetBallList = [];
let __mousePressed, __keyPressed;
let stop = false;
let start = false;
var font, points;
let text = "Your message here";
var canvas;
const width = window.innerWidth/1.5;
const height = window.innerHeight/2;
let previousText = text;
let density = 0.1;
let changedText, changedFont, changedPointDensity, reseted;
let fontName = "Fonts/AmaticSC-Regular.ttf";
function changeText(newText){
  text = newText;
  changedText = true;
}
function changePointDensity(newDensity){
  density = newDensity;
  changedPointDensity = true;
}
function changeFont(newFont){
  fontName = newFont;
  changedFont = true;
}
function reset(){
  document.getElementById("pointDensity").value = 0.1;
  document.getElementById("Fonts/AmaticSC-Regular.ttf").selected = true;
  fontName = "Fonts/AmaticSC-Regular.ttf";
  reseted = true;
}
function preload() {
  font = loadFont(fontName);
}
function setup() {
  canvas = createCanvas(width, height);
  canvas.position((window.innerWidth-width)/2, height/1.5);
  createRandomTextPoints(text);  
}
function draw() {
  // const e = document.getElementById('fonts');
  // console.log(e.options[e.selectedIndex].text);
  counter++;
  background(0);
  if(reseted){
    density = 0.1;
    changedFont = true;
    reseted = false;
    console.log(font);
    // changedFont = false;
    // changedText = false;
    // changedPointDensity = false;
  }
  if((changedText || changedPointDensity) && !changedFont){
    createRandomTextPoints(text);  
    counter = 0;
  }else if(changedFont){
    font = loadFont(fontName, createRandomTextPoints(text));
    counter = 0;
    changedFont = false;
  }
  if(changedText){
    changedText = false;
  }
  if(changedPointDensity){
    changedPointDensity = false;
  }
  for (const magnetBall of magnetBallList) {
    magnetBall.show();
    magnetBall.move();
  }
  if(counter > 20){
    setRealPointPositions(text);
  }
}
function createPoints(text){
  let textSize = width/5;
  let tempPoints = font.textToPoints(text, 10, height/2, textSize, {sampleFactor: density});
  let messageWidth = Math.max.apply(Math, tempPoints.map(function(o) { return o.x; })) - Math.min.apply(Math, tempPoints.map(function(o) { return o.x; }));
  while(messageWidth > width){
    textSize -= 15;
    tempPoints = font.textToPoints(text, 10, height/2, textSize, {sampleFactor: density});
    messageWidth = Math.max.apply(Math, tempPoints.map(function(o) { return o.x; })) - Math.min.apply(Math, tempPoints.map(function(o) { return o.x; }));
  }
  let messageHeight = Math.max.apply(Math, tempPoints.map(function(o) { return o.y; })) - Math.min.apply(Math, tempPoints.map(function(o) { return o.y; }));
  let xShift = (width - messageWidth)/2;
  let yShift = height/2 + messageHeight/2*0.9;
  return font.textToPoints(text, xShift, yShift, textSize, {sampleFactor: density});
} 
function getBallColor(colorcounter){
  if (colorcounter < 256) {
      bcolor = color(255, colorcounter, 0);
    } else if (colorcounter < 512) {
      bcolor = color(511 - colorcounter, 255, 0);
    } else if (colorcounter < 768) {
      bcolor = color(0, 767 - colorcounter, colorcounter - 512);
    }
  return bcolor;
}
function createRandomTextPoints(text) {
  magnetBallList = [];
  colorcounter = 0;
  points = createPoints(text);
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    bcolor = getBallColor(colorcounter);
    colorcounter += 800/points.length;
    if (i >= magnetBallList.length) {
      magnetBallList.push(
        new magnetBall(random(10, displayWidth), random(10, displayHeight), 5, bcolor)
      );
    }else{
      magnetBallList[i].x = random(10, displayWidth);
      magnetBallList[i].y = random(10, displayHeight);
      magnetBallList[i].color = bcolor;
    }
  }
}
function setRealPointPositions(){
  for (let i = 0; i < magnetBallList.length; i++) {
    let pt = points[i];
    magnetBallList[i].ox = pt.x;
    magnetBallList[i].oy = pt.y;
  }
}
function transitionText(text) {
  points = font.textToPoints(text, 100, windowHeight / 2, windowWidth / 7, {
    sampleFactor: 0.2,
  });
  let ogL = magnetBallList.length;
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    bcolor = getBallColor(points, colorcounter);
    colorcounter += points.length/600;
    if (i >= magnetBallList.length) {
      magnetBallList.push(
        new magnetBall(points[i - ogL].x, points[i - ogL].y, 0, 0, 5, bcolor)
      );
    }
    magnetBallList[i].ox = pt.x;
    magnetBallList[i].oy = pt.y;
    magnetBallList[i].x = random(10, displayWidth);
    magnetBallList[i].y = random(10, displayHeight);
    magnetBallList[i].color = bcolor;
  }
  magnetBallList.length = points.length;
  colorcounter = 0;
}

class magnetBall {
  constructor(x, y, d, color) {
    this.d = d;
    this.r = d / 2;
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.xS = 0;
    this.yS = 0;
    this.xA = 0;
    this.yA = 0;
    this.color = color;
    this.hit = false;
  }
  show() {
    fill(this.color);
    strokeWeight(0);
    ellipse(this.x, this.y, this.d, this.d);
  }
  move() {
    if (dist(this.x, this.y, this.ox, this.oy) > 2) {
      this.x += (this.ox-this.x)/3;
      this.y += (this.oy-this.y)/3;
    }else{
      this.xS = 0;
      this.yS = 0;
    }
  }
  reverse() {
    let x = this.x;
    let y = this.y;
    let r = this.r;
    if (x + r > width || x - r < 0) {
      this.xS *= -1;
    }
    if (y + r > height || y - r < 0) {
      this.yS *= -1;
    }
  }
  reset() {
    this.x = this.ox;
    this.y = this.oy;
    this.xS = 0;
    this.yS = 0;
    this.xpath = [];
    this.ypath = [];
  }
}

// function mousePressed() {
//   __mousePressed = true;
// }
// function mouseReleased() {
//   __mousePressed = false;
// }
// function keyReleased() {
//   if (key == "s") {
//     stop = true;
//   }
//   __keyPressed = false;
// }
// function keyPressed() {
//   start = true;
//   __keyPressed = true;
// }
