const W = 1000
const H = 780
const stepLenght = 50
const numberOfCells = (W / stepLenght) * (H / stepLenght)
const numberOfColumns = H / stepLenght
const numberOfRows = W / stepLenght
const angleStep = (Math.PI / 4) / (H / stepLenght)
const padding = 50
const margin = 5

let x = 0
let y = 0
let angle = 0

function setup() {
  createCanvas(W, H)
  frameRate(60)
  rectMode(CENTER)
}


function draw() {
  background("black")
  let rownumber = 1
  //noLoop()
  //let angle = map(noise(mouseX / 100, mouseY / 100), 0, 1, 0, PI/2)

  //angleOffset = map(mouseX,0,W,100*angleStep,150*angleStep)
  for (let y = padding; y < H - padding; y += stepLenght + margin) {
    angle = 0

    for (let x = padding; x < W - padding; x += stepLenght + margin) {
      angle += (Math.PI / 4) / (1/rownumber)
      push()
      translate(x, y)
      rotate(angle)
      //fill(getRandomColor())
      rect(0, 0, stepLenght, stepLenght)
      translate(-x, -y)
      pop()
    }
    rownumber++
  }

  angle = 0
  noLoop()

}

function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}