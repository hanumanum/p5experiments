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
  
  let x = W / 2 + (spiralstep*newAngle) * sin(newAngle)
  let y = H / 2 + (spiralstep*newAngle) * cos(newAngle)
  noizyCircle(x, y, radiusOfCircles, density)

  i++
  if (y-radiusOfCircles<0 || y+radiusOfCircles>H) {
    noLoop()
  }
}


function noizyCircle(x, y, r, density) {
  
  beginShape()
  for (let a = 0; a <= 2 * PI; a += (2 * PI) / density) {
    let xn = x + r * cos(a)
    let yn = y + r * sin(a)
    let xo = noise(xn, yn) * 5
    let yo = noise(xn, yn) * 5

    vertex(xn + xo, yn + yo)
  }
  endShape(CLOSE)

}