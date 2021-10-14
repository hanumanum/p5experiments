const W = 1000
const H = 1000
const w  = 10
let p 

function setup() {
  createCanvas(W, H)
  strokeWeight(1)
  frameRate(15)
  p = createVector(W/2, H/2)
}

function draw() {
  clear()
  
  let m = p5.Vector.random2D()
  let mouse = createVector(mouseX, mouseY)

  m.setMag(2)
  p.sub(mouse)
  p.add(m)
  


  fill("red")
  ellipse(p.x, p.y, w)
}