const W = 1400
const H = 800
const POINTS = []
const COUNT = 100
const SEEKRADIUS = 40
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
