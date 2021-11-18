const W = 1000
const H = 500

const spiralstep = 4
const angleDivider = 4
const radiusOfCircles = 10
let angle = 1

const density = 120
let i = 0

function setup() {
  createCanvas(W, H)
  stroke('rgba(0,0,0,0.50)');
  //noFill()
}

function draw() {
  newAngle = (angle / angleDivider) * i;

  let x = W / 2 + (spiralstep * newAngle) * sin(newAngle)
  let y = H / 2 + (spiralstep * newAngle) * cos(newAngle)
  drawNoizyCircle(x, y, radiusOfCircles, density)

  i++
  if (y - radiusOfCircles < 0 || y + radiusOfCircles > H) {
    noLoop()
  }
}


