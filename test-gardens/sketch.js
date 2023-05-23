/// <reference path="../p5.global-mode.d.ts" />
const width = 800
const height = 800
const size = 400
const centerX = width / 2
const centerY = height / 2
let gridGarden = []
let randomGarden = []
let circlicGarden = []
let circlicGardenConcentric = []

function setup() {
  createCanvas(width, height)
  background("black")
  rectMode(CENTER)
  angleMode(DEGREES)
  circlicGardenConcentric = garden_circular_concentric(centerX, centerY, 400, Math.PI / 10, 100, "array")
  //randomGarden = garden_random(200, width, height,"array")
  //circlicGarden = garden_circular(centerX, centerY, 100, Math.PI/8, "array")
}

function draw() {
  background(0)

  circlicGardenConcentric.map(point => {
    push()
    translate(point[0], point[1])
    rotate(frameCount + dist(point[0], point[1], centerX, centerY) / 5)
    circle(0, 0, 5)
    rect(0, 0, 50)
    pop()
  })
  //circlicGarden.map(point => circle(point[0], point[1], 20))
}