const W = 1000
const H = 800
const stepLenght = 50
const padding = 50
const margin = 3
const numberOfColumns = Math.ceil((W - 2 * padding) / (stepLenght + margin))
const numberOfRows = Math.ceil((H - 2 * padding) / (stepLenght + margin))
const maxRotation = Math.PI

let angle = 0
let rownumber = 0 
let collnumber = 0

function setup() {
  createCanvas(W, H)
  rectMode(CENTER)
  noStroke()
}

function draw() {
  //background("black")
  clear()
  for (let y = padding; y < H - padding; y += stepLenght + margin) {
    
    let maxRotationForRow = maxRotation / (numberOfRows - rownumber) 
    maxRotationForRow = (maxRotationForRow==Infinity) ? 0: maxRotationForRow
    let inRowStep = maxRotationForRow/numberOfRows

    for (let x = padding; x < W - padding; x += stepLenght + margin) {
      push()
      translate(x, y)
      angle+= inRowStep
      angleOsscilator = map(cos(frameCount/80), -1, 1, 0, angle)
      let r = map(angleOsscilator, 0, angle , 200, 225)
      let b = map(angleOsscilator, 0, angle, 100,150)
      let g = 0
      
      rotate(angleOsscilator)
      fill(r, g, b)
      rect(0, 0, stepLenght, stepLenght)

      translate(-x, -y)
      pop()
      collnumber++
    }


    rownumber++
    collnumber = 0
    angle = 0
  }
  rownumber=0

}