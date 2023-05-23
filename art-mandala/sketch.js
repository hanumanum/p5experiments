/// <reference path="../p5.global-mode.d.ts" />
//TODO: complete this

const width = 800
const height = 800
const color = "red"
const size = 400
const centerX = width / 2
const centerY = height / 2

function setup() {
  createCanvas(width, height)
  background("black")
  rectMode(CENTER)
  angleMode(DEGREES)
  //blendMode(HARD_LIGHT)
  stroke(color)
  strokeWeight(2)
  noFill()

}

function drawLines(angle, size, color, rate = 50) {
  stroke(color)
  for (let i = 0; i < 360; i += angle) {
    push()
    translate(centerX, centerY)
    rotate(i)
    line(0, 0, Math.cos(frameCount / rate) * size, Math.cos(frameCount / rate) * size)
    pop()
  }
}


function drawEllipses(angle, size, color, rate = 50) {
  stroke(color)
  for (let i = 0; i < 360; i += angle) {
    push()
    translate(centerX, centerY)
    rotate(i)
    ellipse(0, 0, (Math.cos(frameCount / rate) * size) * 2, Math.cos(frameCount / rate) * size)
    pop()
  }
}

function drawRectangles(angle, size, color) {
  stroke(color)
  for (let i = 0; i < 360; i += angle) {
    push()
    translate(centerX, centerY)
    rotate(i)
    rect(0, 0, Math.cos(frameCount / 50) * size, Math.sin(frameCount / 50) * size)
    pop()
  }
}

let color1 = "black"
let color2 = "red"
let color3 = "blue"
let m = 9


function linedash(x1, y1, x2, y2, delta, style = '-') {
  // delta is both the length of a dash, the distance between 2 dots/dashes, and the diameter of a round
  let distance = dist(x1,y1,x2,y2);
  let dashNumber = distance/delta;
  let xDelta = (x2-x1)/dashNumber;
  let yDelta = (y2-y1)/dashNumber;

  for (let i = 0; i < dashNumber; i+= 2) {
    let xi1 = i*xDelta + x1;
    let yi1 = i*yDelta + y1;
    let xi2 = (i+1)*xDelta + x1;
    let yi2 = (i+1)*yDelta + y1;

    if (style == '-') { line(xi1, yi1, xi2, yi2); }
    else if (style == '.') { point(xi1, yi1); }
    else if (style == 'o') { ellipse(xi1, yi1, delta/2); }
  }
}


function draw() {
  background("black")
  strokeWeight(2)
  if (frameCount % 100 == 0) {
    color1 = getRandomColorV2()
    color2 = getRandomColorV2()
    color3 = getRandomColorV2()
    m += 3
  }


  drawEllipses(m, 400, color1, 160)
  drawEllipses(m + 5, 400, color3, 160)
  //drawLines(m, 120, color2, 160)
  drawRectangles(60, 1200, color2)
  //drawEllipses(60, 400, color3, 30)

  strokeWeight(1)
  for (let i = 0; i <= 360; i += 20) {
    push()
    translate(centerX, centerY)
    rotate(i)
    linedash(0, 0, size, size, 3, "o")
    //drawLines(m, 120, color2, 160)
    pop()
  }

  for(let i=150; i<= width*2; i+=50){
    ellipse(centerX, centerY, i, i)
  }
  
}