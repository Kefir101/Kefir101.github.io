const size2 = 1000;

function setup(){
  createCanvas(size2, size2)
}

function draw(){
  background(200);
}

class magnetBall {
  constructor(x, y, xSpeed, ySpeed, d, color) {
    this.d = d;
    this.r = d / 2;
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = color;
    // this.xpath = [];
    // this.ypath = [];
  }
  show() {
    fill(this.color);
    strokeWeight(0);
    ellipse(this.x, this.y, this.d, this.d);
    // for(let i = 0; i < this.xpath.length; i++){
    //   ellipse(this.xpath[i], this.ypath[i], 3, 3)
    // }
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(abs(this.xSpeed) > 0 && abs(this.ySpeed)){
      this.xpath.push(this.x);
      this.ypath.push(this.y);
    }
  }
  frictionLoss() {
    let friction = this.friction;
    let angle = atan(-this.ySpeed/this.xSpeed);
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