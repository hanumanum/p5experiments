const W = 1400
const H = 800
const POINTS = []
const COUNT = 200
const SEEKRADIUS = 30
let f

function setup() {
  createCanvas(W, H)

  for (let i = 0; i < COUNT; i++) {
    POINTS.push(new Particle(random(0, W), random(0, H), i, SEEKRADIUS))
  }
}

function draw() {
  
  //background(10, 12)
  background("black")

  if (frameCount%117==0) {
    f = random(POINTS)
    f.fired = true
  }

  for (let p of POINTS) {
    p.move(POINTS)
  }

}
function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
  //return color(random(255), random(255), random(255))
}