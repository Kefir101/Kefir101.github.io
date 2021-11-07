var counter = 0;
var colorcounter = 0;
let magnetBallList = [];
let __mousePressed, __keyPressed;
let stop = false;
let start = false;
var font, points;
let text = "Made by Kefir101";
var canvas;
function preload() {
  font = loadFont("AmaticSC-Regular.ttf");
}
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  createRandomTextPoints(text);  
}
function draw() {
  counter++;
  background(0);
  for (const magnetBall of magnetBallList) {
    magnetBall.show();
    magnetBall.move();
  }
  if(counter > 20){
    setRealPointPositions(text);
  }
}
function createPoints(text){
  return font.textToPoints(text, 100, windowHeight / 2, windowWidth / 5, {
    sampleFactor: 0.1,
  });
} 
function getBallColor(points, colorcounter){
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
  points = createPoints(text);
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    bcolor = getBallColor(points, colorcounter);
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
function setRealPointPositions(text){
  points = createPoints(text);
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
