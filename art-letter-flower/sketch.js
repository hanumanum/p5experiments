const _textSize = 300
const _texSizeLabel = 20
const W = 1200
const H = 800
const labelOfsetX = 80
const labelOfsetY = 20
const letters = ["Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "ւ", "Փ", "Ք"]
let currentLetter = letters[0]
let Rotations = 2

const rotat = document.getElementById("rotations")
const rotatLabel = document.getElementById("rotationvalue")
const letter = document.getElementById("letters")
const letterLabel = document.getElementById("lettervalue")

rotat.onchange=function(e){
  Rotations = e.target.value
  rotatLabel.innerText = Rotations
  redraw()
}

letter.onchange=function(e){
  currentLetter = letters[e.target.value]
  letterLabel.innerText = currentLetter
  redraw()
}

function setup() {
  createCanvas(W, H)
  rectMode(CENTER)
  noStroke()
}

function draw() {
  background("black")
  fill("white")
  ellipse(W / 2, H / 2, _textSize * 2)
  drawLetterFlower(currentLetter, W / 2, H / 2)
  fill("white")
  textSize(_texSizeLabel)
  text(`${currentLetter} (π/${Rotations})`, W-labelOfsetX, H-labelOfsetY)
  noLoop()
}

function drawLetterFlower(letter, x, y) {
  translate(x, y)
  for (let ang = 0; ang <= 2 * PI; ang += PI / Rotations) {
    push()
    fill("black")
    textSize(_textSize)
    rotate(ang)
    text(letter, 0, 0)
    pop()
  }
  translate(-x, -y)
}