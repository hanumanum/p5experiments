/// <reference path="../p5.global-mode.d.ts" />
//TODO: complete this
const width = 800
const height = 800
const color = "red"
const size = 400
const centerX = width / 2
const centerY = height / 2

function setup() {
  createCanvas(width, height)
  background("black")
  rectMode(CENTER)
  angleMode(DEGREES)
  //blendMode(ADD)
  //stroke(color)
  noStroke()
  strokeWeight(1)
  noFill()
  noSmooth()
}

let startAng = 0
const colors = ["#FFEB00", "#FC0019", "#01FF4F"]

function draw() {
  clear()
  background("black")

  startAng += 1
  const arkAng = 30
  const arkPadding = 10
  let size = 400

  fill(colors[0])
  for (let ang = startAng; ang < 360 + startAng; ang += arkAng + arkPadding) {
    arc(centerX, centerY, size, size, ang, ang + arkAng, PIE)
  }

  const sizeOscilated = oscilate_trig(size, 12, 50, sin)
  fill(colors[1])
  ellipse(centerX, centerY, sizeOscilated, sizeOscilated)

  const sizeOscilated1 = oscilate_trig(size, 50, 20, cos)
  fill(colors[2])
  ellipse(centerX, centerY, sizeOscilated1, sizeOscilated1)

  if (frameCount % 100 == 0) {
    colors[getRandomInt(0, 2)] = getRandomColor()
  }
}