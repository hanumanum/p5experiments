let x = 0
let y = 0
let w = 100
let W = 1000
let H = 300
let yStep = 1

function setup() {
  let padding = 5

  createCanvas(W, H)
  noFill()
}


function draw(){
  background("black")
  stroke("magenta")
  line(x, y, x+W, y)
  
  y+=yStep
}