let font
const fSize = 150
const msg = 'Է ն տ ր ո պ ի ա ...'
let pts = [] // store path data
const stopPoints = [0, 140, 270, 426, 550, 680, 825, 963, 1300]
const animationFunctions = [drawCircles_spring, drawCircles_tickle, drawCircles_with_mouse,drawCircles_oscilator]
let animationIndex = 0

function preload() {
  font = loadFont('Arian_Grqi_U.ttf')
}

function setup() {
  frameRate(30)
  createCanvas(1350, 500)
  textFont(font)
  textSize(fSize)

  pts = extractPoints(msg, 60, 300, fSize, 0.5, 0)
  pts = setDestinations(pts)

  stroke(255)
  strokeWeight(2)
  noFill()
}

function draw() {
  background(0)

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i]
    for (let j = 0; j < stopPoints.length; j++) {
      if (p.x > stopPoints[j] && p.x < stopPoints[j + 1]) {
        const animationFunction =  animationFunctions[animationIndex]
        animationFunction(j, p)
      }
    }
  }
}


function mouseClicked(){
  if(animationIndex<animationFunctions.length-1){
    animationIndex++  
  }
  else{
    animationIndex=0
  }
  console.log(animationIndex)
}


function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}

function drawCircles_tickle(j, p) {
  let arr = [-j,0,j]
  noStroke()
  fill("white")
  ellipse(p.x + random(arr), p.y + random(arr), 3)
}


function drawCircles_spring(j, p) {
  fill("white")
  noStroke()
  let dddd = frameCount / 7
  let r = j
  let rfactor = 15
  let x = p.x + r * rfactor * cos(dddd)
  let y = p.y + r * rfactor * sin(dddd)

  ellipse(x, y, 2)
}

function drawCircles_with_mouse(j, p) {
  fill("white")
  noStroke()
  let dddd = cos(frameCount)
  let mouseOffset = map(mouseX, 20, width / 2, 0, j)
  let r = random(-j * mouseOffset, j * mouseOffset)

  let x = p.x + (r) * cos(dddd)
  let y = p.y + (r) * sin(dddd)

  ellipse(x, y, 2)
}



function drawCircles_oscilator(j, p) {
  fill("white")
  noStroke()
  oscillate_linear(p.x, p.y, p.newX, p.newY, 20)
}


function oscillate_linear(x1, y1, x2, y2, speed) {
  //MATH referance: https://skysmart.ru/articles/mathematic/grafik-linejnoj-funkcii
  let a = (y1 - y2) / (x1 - x2)
  let b = y1 - a * x1
  let iter = sin(frameCount / speed)
  let newX = map(iter, -1, 1, x1, x2)
  let newY = a * newX + b
  ellipse(newX, newY, random(1,5))
}


function setDestinations(pts) {
  let factor = 50
  for (let p of pts) {
    for (let j = 0; j < stopPoints.length; j++) {
      if (p.x >= stopPoints[j] && p.x < stopPoints[j + 1]) {
        p.newX = random(p.x-(j + 1)*factor, p.x+j*factor)
        p.newY = random(p.y - j * factor, p.y + j * factor)
      }
    }
  }

  return pts;
}


function extractPoints(text, xPos, yPos, fSize, sampleFactor, simplifyThreshold) {
  return font.textToPoints(text, xPos, yPos, fSize, {
    sampleFactor, // increase for more points
    simplifyThreshold // increase to remove collinear points
  })
}