const W = 800
const H = 800
let LINES = []
let r = 5
const rStep = 40
const COUNT = 60
const limit = Math.sqrt(Math.pow(W, 2) + Math.pow(H, 2))

let x1 = 0
let y1 = 0
let x2 = x1 + 20
let y2 = y1

function setup() {
  createCanvas(W, H)
  strokeWeight(5)
  createLines()

}

function draw() {
  background(10, 12)
  
  noStroke()
  
  for (let lin of LINES) {
    push()
    rotate(lin.startAngl)
    stroke(lin.color)
    line(lin.x1, lin.y1, lin.x2, lin.y2)
    lin.x1 += lin.velocity
    lin.x2 += lin.velocity

    if (lin.x1 >= limit / 2) {
      fill(lin.color)
      ellipse(lin.x2, lin.y1, 10)
      lin.color = getRandomColor()
    }

    rotate(-lin.startAngl)

    pop()
  }

  if (frameCount % 100 == 0) {
    createLines()
  }

  removePassedLines()
}

function createLines() {
  //LINES = []
  for (let i = 0; i < COUNT; i++) {
    LINES.push(createNewLine())
  }
}

function createNewLine() {

  const x = random(20, 50)
  const y = 0

  return {
    x1: x,//random(0, W),
    y1: y, //random(0, H),
    x2: x + random(x, 30),
    y2: y,
    startAngl: random(0, PI / 2),
    color: getRandomColor(),
    velocity: random(1, 3)
  } 
}

function removePassedLines(){
  for(let i=LINES.length-1; i>=0; i--){
    if(LINES[i].x2>limit){
      LINES.splice(i, 1)
    }
  }
}