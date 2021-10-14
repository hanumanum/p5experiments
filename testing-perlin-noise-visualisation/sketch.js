const W = 1000
const H = 1000
let LINES = []
const rStep = 1
const COUNT = 60

function setup() {
  createCanvas(W, H)
  strokeWeight(1)
  frameRate(15)

}

function draw() {
  noiseDetail(4,0.5)
  loadPixels()
  
  let yoff = 0
  for (let y = 0; y <= W; y += rStep) {
    let xoff = 0
    for (let x = 0; x <= H; x += rStep) {
      let index = (x + y * W) * 4
      let r = noise(xoff, yoff) * 255
      pixels[index + 0] = r
      pixels[index + 1] = r
      pixels[index + 2] = r
      pixels[index + 3] = 255
      xoff += 0.01
    }
    yoff += 0.01
  }
  updatePixels()
  noLoop()
}



function randomDirection() {
  return (Math.random() > 0.5) ? 1 : -1;
}

function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}