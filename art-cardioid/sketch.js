let mult = 100
let rotator = -Math.PI/2
let rotatorDivider = 1
let cardioidParameter = 15
function setup() {
  createCanvas(800, 800)
  background("black")
  //frameRate(5)
}

function draw() {
  stroke(getRandomColor())
  drawHeart(mult, width/2, height/2,  rotator)
  mult-=1
  rotator+=PI/rotatorDivider
}