const x = 1100
const y = 220
const fontSize = 30
const lettersCount = 35
const rowsCount = 9
const lettersMargin = 20
let alphabet = []
let text = []
let chatX = 30
let chatY = 0
let chatCounter = 0

let functionsList = [drawLetter_circles, drawLetter_circlesAndLines, drawLetter_lines]
let currentFunction = functionsList[0]
initFunctionChanger()

function setup() {
  createCanvas(1250, 600)
  strokeWeight(1)
  background("black")
  frameRate(30)
  alphabet = makeAlphabet(lettersCount)

}

function mouseClicked() {
  chatX = 30
  chatY = 40
  chatCounter = 0
  background("black")
  redraw()
}

function draw() {
  //background("black")

  if (text.length == 0) {
    text = makeTextRow(alphabet, 10, 25)
    chatX = 30
    chatY += 40
  }
  else {
    let char = text.pop()
    currentFunction(char, chatX, chatY, 30, 1, "#50FF3B")
    chatX += 40
  }

  if (chatY > height) {
    background("black")
    chatX = 30
    chatY = 40
  }


  push()
  stroke("white")
  line(x - lettersMargin, y, x - lettersMargin, width)
  pop()
  drawAllAlphabet(alphabet, rowsCount, fontSize, lettersMargin, x, y, currentFunction)

}



function makeTextRow(alphabet, min, max) {
  const charsCount = random(min, max)
  const text = []
  for (let i = 0; i < charsCount; i++) {
    const char = random(alphabet)
    text.push(char)
  }

  return text;
}

