//EXPLINER https://cubic-bezier.com/#.28,.87,.51,.52
 
const W = 1000
const H = 1000
let LINES = []
const rStep = 200
const COUNT = 60
let x1=0, y1=0, x2=100, y2=100, x3=200, y3=200, x4=500, y4=500


function setup() {
  createCanvas(W, H)
  strokeWeight(1)
  frameRate(15)
}

function draw() {
  clear()

  x2 = mouseX
  y2 = mouseY

  fill("red")
  ellipse(x1,y1,4)
  fill("green")
  ellipse(x2,y2,4)
  fill("blue")
  ellipse(x3,y3,4)
  fill("yellow")
  ellipse(x4,y4,4)

  noFill()
  stroke("blue")
  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
  //noLoop()
}

function randomDirection() {
  return (Math.random() > 0.5) ? 1 : -1;
}

function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}