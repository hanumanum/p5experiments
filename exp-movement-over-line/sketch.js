let startX = 50
let startY = 100
let endX = 150
let endY = 500

// y = a*x + b
// y1 = a*x1 + b
// y2 = a*x2 + b

/*
let a = (startY - endY) / (startX - endX)
let b = startY - a * startX
*/

function setup() {
  createCanvas(500, 500)
  background("black")
  //frameRate(5)

}

function draw() {
  fill("white")
  clear()
  ellipse(startX, startY, 5)
  ellipse(endX, endY, 5)

  oscillate(startX, startY, endX, endY, 10)
  oscillate(200, 500, 150, 60, 10)
  oscillate(500, 200,  60, 150, 60)
}


function oscillate(x1,y1,x2,y2, speed){
  let a = (y1 - y2) / (x1 - x2)
  let b = y1 - a * x1
  let iter = sin(frameCount/speed)
  let newX = map(iter, -1, 1 ,x1, x2)
  let newY = a * newX + b
  ellipse(newX, newY, 5)
}