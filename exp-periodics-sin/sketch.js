const step = 10
const diametr = 100
let x0, y0
let ii = 0


function setup() {
  frameRate(10)
  createCanvas(500, 500)
  x0 = width / 2
  y0 = height / 2
}

function draw() {
  background("white")
  let dd = sin(frameCount/10) * 100
  circle(x0, y0, dd)
}