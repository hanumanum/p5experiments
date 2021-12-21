let w = window.innerWidth
let h = window.innerHeight
let points = []
let mult = 0.002
let density = 30
let step = w / density


function setup() {
  createCanvas(w, h)
  background("black")


  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      points.push(createVector(x + random(-10, 10), y + random(-10, 10)))
    }
  }

}

function draw() {
  noStroke()
  drawFlowField(points, mult, _noizeDetail = 1)
}