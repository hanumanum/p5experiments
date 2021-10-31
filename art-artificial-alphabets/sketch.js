const x = 1100
const y = 220
const fontSize = 30
const lettersCount = 36
const rowsCount = 9
const lettersMargin = 20
let alphabet = []
let text = []
let chatX = 30
let chatY = 0

function setup() {
  createCanvas(1250, 600)
  strokeWeight(1)
  background("black")
  frameRate(10)
  alphabet = makeAlphabet(lettersCount)
}

function draw() {
  //background("black")

  if (text.length == 0) {
    text = makeTextRow(alphabet)
    chatX = 30
    chatY += 40
  }
  else {
    let char = text.pop()
    drawLetterByLines(char, chatX, chatY, 40, 1, "blue")
    chatX += 50
  }


  push()
  stroke("white")
  line(x - lettersMargin, y, x - lettersMargin, width)
  pop()
  drawAllAlphabet(alphabet, rowsCount, fontSize, lettersMargin, x, y)
  
}



function makeTextRow(alphabet) {
  const charsCount = random(5, 15)
  const text = []
  for (let i = 0; i < charsCount; i++) {
    const char = random(alphabet)
    text.push(char)
  }

  return text;
}

