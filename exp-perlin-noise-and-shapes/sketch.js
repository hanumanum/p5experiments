const W = 1000
const H = 1000
let LINES = []
const rStep = 1
const COUNT = 60
const r = 100
const noiseMax = 100
let phase = 0

function setup() {
  createCanvas(W, H)
  frameRate(15)
}

function draw() {
  background("black")
  stroke("white")
  noFill();
  translate(W/2, H/2)
  beginShape()
  for (let a = 0; a <= 2*PI ; a += 0.08) {
    let xoffs = map(cos(a+phase), -1, 1, 0, noiseMax)
    let yoffs = map(sin(a+phase), -1, 1, 0, noiseMax)
    let r = map(noise(xoffs, yoffs), 0, 1, 200, 250) 
    let x = r*cos(a)
    let y = r*sin(a)
    vertex(x,y)
  }
  endShape(CLOSE)
  //noLoop()
  phase+=0.08
}



function randomDirection() {
  return (Math.random() > 0.5) ? 1 : -1;
}

function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}