let _image = {}
let greedSize = 5
const animationFunctions = [
  drawByLinesRandom
  , drawByLines
  , drawByAngles
  , drawByCrosses
  , drawByLoopedLines
  , drawByElipsesOscilated
  , drawByElipsesRandomized
  , drawByBubbles
  , drawByLettersWaved
  , drawByLetters
]

let animationFunctionIndex = 0
let currentAnimation = animationFunctions[0]

function mouseClicked() {
  clear()
  loop()
  console.log(frameCount)
  frameCount = 0
  if (animationFunctionIndex < animationFunctions.length - 1) {
    animationFunctionIndex++
  }
  else {
    animationFunctionIndex = 0
  }
  console.log(animationFunctions[animationFunctionIndex].name)
}


function preload() {
  _image = loadImage("text-image-enlarged.png")
}

function setup() {
  createCanvas(_image.width, _image.height);
  _image.loadPixels()

}

function draw() {
  background(10)

  setGreedSize(animationFunctionIndex)

  for (let y = 0; y < _image.height; y += greedSize) {
    for (let x = 0; x < _image.width; x += greedSize) {
      let ind = (x + y * _image.width) * 4
      let a = _image.pixels[ind + 3]
      if (a != 0) {

        currentAnimation = animationFunctions[animationFunctionIndex]
        currentAnimation(x, y, a, greedSize, ind)
      }
    }
  }

}


function drawByBubbles(x, y, a, greedSize, ind) {
  push()
  noFill()
  stroke("white")
  const particleSize = map(a, 0, 255, 3, greedSize)
  let yOffs = map(sin((frameCount / ((y) / 3))), -1, 1, 50, 0)
  ellipse(x + random(-1, 1), y + yOffs, particleSize / 2)
  pop()
}

function drawByLettersWaved(x, y, a, greedSize) {
  push()
  const particleSize = map(a, 0, 255, 3, greedSize)
  //const randomazedParticleSize = random(particleSize / 3, particleSize)
  fill("#FFF402")
  textSize(particleSize)
  const xOffset = map(sin((frameCount / ((y) / 3))), -1, 1, 50, 0)
  text("Ա", x + xOffset, y)
  pop()
}

function drawByLetters(x, y, a, greedSize) {
  push()
  const particleSize = map(a, 0, 255, 3, greedSize)
  fill("#00EDF5")
  textSize(particleSize)
  const randomLetter = getRandomLatter()
  text(randomLetter, x, y)
  pop()
}

function drawByLines(x, y, a, greedSize, ind) {
  push()
  const boldness = map(a, 0, 255, 1, 3)
  const xToAdd = random(1, 10)
  stroke("#F4F111")
  strokeWeight(boldness)
  if (ind % 7 == 0) {
    line(x, y, x + xToAdd, y)
  }

  pop()
}

function drawByAngles(x, y, a, greedSize) {
  push()
  const boldness = map(a, 0, 255, 1, 2)
  const xToAdd = random(2, 6)
  strokeWeight(boldness)
  stroke("#FF01D7")
  line(x, y, x + xToAdd, y)
  line(x, y, x, y + xToAdd)
  pop()
}


function drawByCrosses(x, y, a, greedSize, ind) {
  push()
  stroke("#01FF4F")
  if (x % 2 == 0) {
    let length = random(-2 * greedSize, 2 * greedSize) / 2
    let height = random(-2 * greedSize, 2 * greedSize) / 2
    line(x, y, x + height, y)
    line(x, y + length, x, y - length)
    ellipse(x, y, 5)
  }
  pop()
}

function drawByLoopedLines(x, y, a, greedSize, ind) {
  push()
  stroke(getRandomColor())
  strokeWeight(2)
  let length = random(-2 * greedSize / 3, 2 * greedSize / 3) / 2
  let height = random(-2 * greedSize / 3, 2 * greedSize / 3) / 2
  strokeWeight(3)
  line(x, y, x + height, y + length)
  pop()
}

function drawByElipsesRandomized(x, y, a, greedSize) {
  push()
  fill("#01FF4F")
  ellipse(x, y, greedSize + random(-3, 3), greedSize + random(-3, 3))
  pop()
}

function drawByElipsesOscilated(x, y, a, greedSize, ind) {
  push()
  fill("#00EDF5")
  let offs = map(sin((frameCount + ind) / 10), -1, 1, 0, greedSize / 4)
  ellipse(x, y, greedSize - offs, greedSize - offs)
  pop()
}

function drawByLinesRandom(x,y, a, greedSize, ind){
  push()
  stroke("white")
  translate(x, y)
  strokeWeight(random(0,5))
  let ang = getDirectedRandomAngles()
  
  rotate(ang)
  line(random(0,20),0, random(1,60),0)
  //translate(x, y)

  pop()
  noLoop()
}

function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
  //return color(random(255), random(255), random(255))
}

function getRandomLatter() {
  const letters = ["Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "ւ", "Փ", "Ք"]
  return random(letters)
}

function getDirectedRandomAngles(){
  return random([0, PI/4, PI/2])
}

function setGreedSize(animationFunctionIndex){
  let functionName = animationFunctions[animationFunctionIndex].name
  if (functionName == "drawByAngles" || functionName == "drawByLetters" || functionName == "drawByLettersWaved" || functionName == "drawByBubbles" || functionName == "drawByElipsesOscilated") {
    greedSize = 15
  }
  else if (functionName == "drawByLines" || functionName == "drawByElipsesRandomized") {
    greedSize = 5
  }
  else if(functionName== "drawByLinesRandom"){
    greedSize=10
  }
  else {
    greedSize = 20
  }
}