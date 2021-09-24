const W = 1000
const H = 1000
let LINES = []
const rStep = 40
const COUNT = 60
const limit = Math.sqrt(Math.pow(W, 2) + Math.pow(H, 2))
const noizeFactor = 30

function setup() {
  createCanvas(W, H)
  strokeWeight(1)
  frameRate(15)
  background(10)
  for(let y = 10; y<=W; y+=rStep){
    for(let x = 10; x<=H; x+=rStep){
      const r = noise(x, y) * noizeFactor
      if(x!=y && randomDirection()==1){
        stroke("white")
        line(x, y, x, y+rStep)
      }
      noStroke()
      ellipse(x, y, r)
    }
  }
}

function draw() {
  
}



function randomDirection() {
  return (Math.random() > 0.5) ? 1 : -1;
}

function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}