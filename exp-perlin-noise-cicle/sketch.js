//FOR comparisation of perlin noize vs random 
const W = 1000
const H = 1000
let LINES = []
const rStep = 200
const COUNT = 60

function setup() {
  createCanvas(W, H)
  strokeWeight(1)
  frameRate(15)
}

function draw() {
  clear()
  let r = map(noise(frameCount * 0.05), -1, 1, 0, rStep)
  ellipse(W/2, H/2, r)
}

