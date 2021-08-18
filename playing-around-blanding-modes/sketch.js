const W = 1000
const H = 800
const RECTS = []
const COUNT = 100
const LINES_COUNT = 20


function setup() {
  BLENDMODES_FOR_DARK_BACKGROUND = [LIGHTEST, DIFFERENCE, EXCLUSION, SCREEN, HARD_LIGHT, ADD]
  BLENDMODES_FOR_WHITE_BACKGROUND = [DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD]

  BLENDMODES = new CircularArray(BLENDMODES_FOR_DARK_BACKGROUND)
  createCanvas(W, H)
  rectMode(CENTER)

  for (let i = 0; i < COUNT; i++) {
    RECTS.push({
      x: W / 2,
      y: H / 2,
      size: random(0, 100),
      color: getRandomColor(),
      directionx: random(-3, 3),
      directiony: random(-3, 3),
      rotation: random(-100, 100),
      rotationVelocity: random(-1, 1)
    })

  }
}

function draw() {
  clear()
  background("black")
  if (frameCount % 200 == 0) {
    bm = BLENDMODES.next()
    blendMode(bm)
    text(bm, 20, 100)
    console.log(bm)
  }

  /*
  if(frameCount%17==0){
    let clr = getRandomColor()
    console.log(clr)
    background(clr)
  }
  */

  for (let i = 0; i < COUNT; i++) {
    //push()
    //translate(RECTS[i].x, RECTS[i].y)
    //rotate(RECTS[i].rotation+=RECTS[i].rotationVelocity)
    //translate(-RECTS[i].x, -RECTS[i].y)
    fill(RECTS[i].color)
    rect(RECTS[i].x, RECTS[i].y, RECTS[i].size, RECTS[i].size)
    RECTS[i].x += RECTS[i].directionx
    RECTS[i].y += RECTS[i].directiony
    //pop()
    //RECTS[i].size-=0.5

    if (RECTS[i].x <= 0 || RECTS[i].x >= W) {
      RECTS[i].directionx *= -1
    }

    if (RECTS[i].y <= 0 || RECTS[i].y >= H) {
      RECTS[i].directiony *= -1
    }

  }

  /*
  for (let i = 0; i < LINES_COUNT; i++) {
    for (let j = 0; j < LINES_COUNT; j++) {
      if(i!=j){
        stroke("white")
        line(RECTS[i].x, RECTS[i].y, RECTS[j].x,  RECTS[j].y)
      }
    } 
  }
  */

  noStroke()
}


function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
  //return color(random(255), random(255), random(255))
}


function mouseClicked() {
  RECTS.unshift({
    x: mouseX,
    y: mouseY,
    size: random(0, 100),
    color: getRandomColor(),
    directionx: random(-2, 2),
    directiony: random(-2, 2),
    rotation: random(-100, 100),
    rotationVelocity: random(-1, 1)
  })

}


class CircularArray {
  constructor(arr) {
    this.array = arr
    this.index = 0
  }

  next() {
    if (this.index == this.array.length)
      this.index = 0
    return this.array[this.index++]
  }

}