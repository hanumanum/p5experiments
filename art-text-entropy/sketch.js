let font
const fSize = 150
const msg = 'Է ն տ ր ո պ ի ա ...'
let pts = [] // store path data
const stopPoints = [0, 140, 270, 426, 550, 680, 825, 963, 1300]
const animationFunctions = [drawCircles_spring, drawCircles_tickle, drawCircles_with_mouse, drawCircles_oscilator]
let animationIndex = 0

function preload() {
  font = loadFont('../aFonts/Arian_Grqi_U.ttf')
}

function setup() {
  frameRate(30)
  createCanvas(1350, 500)
  textFont(font)
  textSize(fSize)

  pts = extractPoints(msg, 60, 300, fSize, 0.5, 0)
  pts = setPointsDestinationsForOscilator(pts, 50)

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
        const animationFunction = animationFunctions[animationIndex]
        animationFunction(j, p)
      }
    }
  }
}


function mouseClicked() {
  if (animationIndex < animationFunctions.length - 1) {
    animationIndex++
  }
  else {
    animationIndex = 0
  }
  console.log(animationIndex)
}


function drawCircles_tickle(j, p) {
  let arr = [-j, 0, j]
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

function setPointsDestinationsForOscilator(pts, factor) {
  //pts is array returned by extractPoints for 
  for (let p of pts) {
    for (let j = 0; j < stopPoints.length; j++) {
      if (p.x >= stopPoints[j] && p.x < stopPoints[j + 1]) {
        p.newX = random(p.x - (j + 1) * factor, p.x + j * factor)
        p.newY = random(p.y - j * factor, p.y + j * factor)
      }
    }
  }

  return pts;
}