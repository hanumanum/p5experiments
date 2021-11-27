const padding = 50
const _boxSize = 170
const _textSize = 70
const _textSizeSmall = 20
const W = 2 * padding + _boxSize * 9
const H = 2 * padding + _boxSize * 5
const labelXoffset = 30
const labelYoffset = 100
const limit = 9
const letters = ["Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "ւ", "Փ", "Ք"]
let Rotations = 2
const RotationsStart = Rotations
let stoped = false

function setup() {
  createCanvas(W, H)
  rectMode(CENTER)
  textSize(_textSizeSmall)
  background("black")
  frameRate(0.5)
  fill("white")
  noStroke()
}

function draw() {
  background("black")
  let i = 0
  for (let y = padding + _textSize; y < H - padding; y += _boxSize + _textSize / 2) {
    for (let x = padding + _textSize; x < W - padding; x += _boxSize) {
      fill("white")
      ellipse(x, y, _textSize * 2)
      fill("black")
      ellipse(x, y, 5)
      drawLetterFlower(letters[i], x, y, Rotations, _textSize)
      fill("white")
      text(letters[i] + " (π/" + Rotations + ")", x - labelXoffset, y + labelYoffset)
      i++
    }
  }

  Rotations++
  if (Rotations == limit) {
    Rotations=RotationsStart
  }
}


function mouseClicked() {
  Rotations = RotationsStart
  redraw()
}
