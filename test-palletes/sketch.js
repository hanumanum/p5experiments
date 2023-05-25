/// <reference path="../p5.global-mode.d.ts" />
const width = 800
const height = 800
const size = 400
const centerX = width / 2
const centerY = height / 2
//let gridGarden = []
//let randomGarden = []

const palletesArray = new CircularObject(PALLETTES)
const colorsArray = new CircularArray(PALLETTES.fullrainbow)

function setup() {
  createCanvas(width, height)
  noStroke()
  frameRate(30)
  gridGarden = garden_grid(width, height, 20, 20, "array")
  gridGarden = gridGarden.map(point => {
    point[3] = colorsArray.next()
    point[4] = random(-2, 3)
    point[5] = random(-2, 2)
    return point
  })
}

function draw() {
  background(0, 0, 0, 20)

  gridGarden.map(point => {
    point[0] += point[4]
    point[1] += point[5]
    fill(point[3])
    circle(point[0], point[1], 5)
  })
}

