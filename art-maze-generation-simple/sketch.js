const W = 1000
const H = 800
const stepLenght = 20

let x = 0
let y = 0


function setup() {
  createCanvas(W, H)
  frameRate(60)
}


function draw() {
  for (let i = 0; i < 10; i++) {
    let isHorisontal = random([true, false])

    if (isHorisontal) {
      line(x, y, x + stepLenght, y)
    }
    else {
      line(x, y, x, y + stepLenght)
    }
    x += stepLenght

  }

  if (x > W) {
    x = 0
    y += stepLenght
  }

  if (y > H) {
    noLoop()
  }

}
