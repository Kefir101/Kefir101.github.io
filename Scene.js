import Scene from './Scene.js/Scene'
//parse = require('./Scene.js/Scene');
const animation = new Scene();
// classes are functions that create objects
// and we're exporting it to use in another file
class Scene {
  // constructor function is the equivalent of
  // the init function
  constructor (canvasId = 'gameCanvas', config) {
    // get the canvas and context
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')

    // world/physics settings
    // merge default config & any passed in config
    this.config = {
      ...defaultConfig,
      ...config
    }

    // set the canvas size
    this.canvas.width = this.config.width
    this.canvas.height = this.config.height

    this.createBalls()

    // begin update loop
    // use an arrow function so that we can use `this` properly
    document.addEventListener('DOMContentLoaded', () => this.update())
  }

  createBalls () {
    const { config } = this
    const colors = ['purple', 'red', 'blue', 'lime']
    // build an array of ball objects
    const balls = [];
    for (let i = 0; i < 20; i++) {
      balls.push(
        new Ball(
          // random X Y position
          Math.random() * config.width, Math.random() * config.height,
          // scene config
          {
            // default width, height, friction
            ...config,
          },
          // ball properties
          {
            // size 10-30
            radius: Math.random() * 20 + 10,
            // random color
            color: colors[Math.floor(Math.random() * colors.length)]
          }
        )
      )
    }

    this.balls = balls
  }

  update () {
    // destructure the scene's variables
    const { ctx, config, balls } = this

    // queue the next update
    window.requestAnimationFrame(() => this.update())

    // clear the canvas
    ctx.clearRect(0, 0, config.width, config.height)

    // update objects
    balls.forEach(ball => ball.update())

    // draw objects
    balls.forEach(ball => ball.draw(ctx))
  }
}
const defaultProps = {
  bounce: 0.75,
  radius: 30,
  color: 'red'
}

class Ball {
  constructor (x = 0, y = 0, sceneProps, props) {
    this.props = {
      ...defaultProps,
      startVelX: (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2) || -1),
      startVelY: (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2) || -1),
      ...props
    }
    this.sceneProps = sceneProps

    this.x = x
    this.y = y
    this.velX = this.props.startVelX
    this.velY = this.props.startVelY
  }
  draw (ctx) {
    const { x, y, props } = this
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = props.color
    ctx.arc(
      x, y,
      props.radius,
      0, Math.PI * 2
    )
    ctx.fill()
    ctx.restore()
  }
  update () {
    const { props, sceneProps } = this

    // y bounce
    if (this.y + props.radius >= sceneProps.height || this.y - props.radius <= 0) {
      this.velY = -this.velY;
    }
    // x bounce
    if (this.x - props.radius <= 0 || this.x + props.radius >= sceneProps.width) {
      this.velX = -this.velX;
    }
    //round down if too small
    this.velX = tooSmall(this.velX);
    this.velY = tooSmall(this.velY);
    // update position
    this.x += this.velX
    this.y += this.velY
  }
}