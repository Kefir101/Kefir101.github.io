var counter = 0;
var colorcounter = 0;
let magnetBallList = [];
let __mousePressed, __keyPressed;
let stop = false;
let start = false;
var font, points;
let text = "Made by Kefir101";
var canvas;
let density = 0.1;
let doneLoading = false;
let endLoop = false;
function preload() {
  font = loadFont("/Fonts/AmaticSC-Regular.ttf");
}
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  createRandomTextPoints(text);
}
function draw() {
  if (!endLoop) {
    counter++;
    background(0);
    for (const magnetBall of magnetBallList) {
      magnetBall.show();
      magnetBall.move();
    }
    if (counter > 20) {
      setRealPointPositions(text);
    }
  }
}
function createPoints(text) {
  return font.textToPoints(text, 100, windowHeight / 2, windowWidth / 5, {
    sampleFactor: 0.1,
  });
}
function createPoints(text) {
  let textSize = width / 5;
  let tempPoints = font.textToPoints(text, 10, height / 2, textSize, { sampleFactor: density });
  let messageWidth = Math.max.apply(Math, tempPoints.map(function (o) { return o.x; })) - Math.min.apply(Math, tempPoints.map(function (o) { return o.x; }));
  while (messageWidth > width) {
    textSize -= 15;
    tempPoints = font.textToPoints(text, 10, height / 2, textSize, { sampleFactor: density });
    messageWidth = Math.max.apply(Math, tempPoints.map(function (o) { return o.x; })) - Math.min.apply(Math, tempPoints.map(function (o) { return o.x; }));
  }
  let messageHeight = Math.max.apply(Math, tempPoints.map(function (o) { return o.y; })) - Math.min.apply(Math, tempPoints.map(function (o) { return o.y; }));
  let xShift = (width - messageWidth) / 2;
  let yShift = height / 2 + messageHeight / 2 * 0.9;
  return font.textToPoints(text, xShift, yShift, textSize, { sampleFactor: density });
}
function getBallColor(colorcounter) {
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
    colorcounter += 800 / points.length;
    if (i >= magnetBallList.length) {
      magnetBallList.push(
        new magnetBall(random(10, displayWidth), random(10, displayHeight), 5, bcolor)
      );
    } else {
      magnetBallList[i].x = random(10, displayWidth);
      magnetBallList[i].y = random(10, displayHeight);
      magnetBallList[i].color = bcolor;
    }
  }
}
function setRealPointPositions() {
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
    colorcounter += points.length / 600;
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
function done() {
  doneLoading = true;
  setTimeout(removeCanvas, 1200)
}
function removeCanvas() {
  document.getElementsByTagName("canvas")[0].style.display = "none";
  endLoop = true;
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
    if (dist(this.x, this.y, this.ox, this.oy) > 1) {
      this.xS = (this.ox - this.x) / 10;
      this.yS = (this.oy - this.y) / 10;
      this.x += this.xS;
      this.y += this.yS;
    } else {
      if (this.xS != 0 && this.yS != 0) {
        done();
      }
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
