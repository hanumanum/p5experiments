const W = 800
const H = 800
const POINTS = []
const COUNT = 18
const PADDING = 50

function setup() {
  createCanvas(W, H)

  for (let i = 0; i < COUNT; i++) {
    POINTS.push({
      x: random(PADDING, W-PADDING),
      y: random(PADDING, H-PADDING),
      color: getRandomColor(),
      directionx: random(-3, 3),
      directiony: random(-3, 3),
    })
  }
}

function draw() {
  clear()
  background("black")
  

  for (let i = 0; i < POINTS.length ; i++) {
    POINTS[i].x += POINTS[i].directionx
    POINTS[i].y += POINTS[i].directiony

    if (POINTS[i].x <= 0 + PADDING || POINTS[i].x >= W - PADDING) {
      POINTS[i].directionx *= -1
      POINTS[i].color = getRandomColor()
    }

    if (POINTS[i].y <= 0 + PADDING || POINTS[i].y >= H - PADDING) {
      POINTS[i].directiony *= -1
      POINTS[i].color = getRandomColor()
    }
  }


  for (let i = 0; i < POINTS.length; i++) {
    stroke(POINTS[i].color)
    for (let j = 0; j < POINTS.length ; j++) {
      if(i!=j && i%2==0){
        line(POINTS[i].x, POINTS[i].y, POINTS[j].x, POINTS[j].y)
      }
    }
  }


}
/*
for (let i = 0; i < COUNT; i++) {
  fill(RECTS[i].color)
  line(RECTS[i].x, RECTS[i].y, RECTS[i].size, RECTS[i].size)
  RECTS[i].x += RECTS[i].directionx
  RECTS[i].y += RECTS[i].directiony

  if (RECTS[i].x <= 0 || RECTS[i].x >= W) {
    RECTS[i].directionx *= -1
  }

  if (RECTS[i].y <= 0 || RECTS[i].y >= H) {
    RECTS[i].directiony *= -1
  }

}
}
*/

function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
  //return color(random(255), random(255), random(255))
}


/*
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
*/
