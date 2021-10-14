//FOR comparisation of perlin noize vs random 
const W = 1000
const H = 1000
let LINES = []
const rStep = 30
const COUNT = 60

function setup() {
  createCanvas(W, H)
  strokeWeight(1)
  frameRate(15)

}

function draw() {
  clear()
  for (let y = 0; y <= W; y += rStep) {
    for (let x = 0; x <= H; x += rStep) {
      let r =  map(noise(x, y, frameCount*0.1), -1, 1, 0, rStep)
      //let r = random(0, rStep)
      ellipse(x, y, r)
    }
  }
  //noLoop()
}



function randomDirection() {
  return (Math.random() > 0.5) ? 1 : -1;
}

function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}