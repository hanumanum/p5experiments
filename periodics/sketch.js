const step = 10
const diametr = 100
let x0, y0
let ii = 0


function setup() {
  frameRate(10)
  createCanvas(500, 500)
  x0 = width / 2
  y0 = height / 2
}

function draw() {
  background("white")
  const t = frameCount
  const dd = sin(t) * 100
  circle(x0, y0, dd)

  line(0,0)

  /*
  background("white")
  fill("black")
  for(let x = 5; x<=width; x+=step){
    for(let y = 5; y<=height; y+=step){
        ellipse(x, y, diametr, diametr)
    } 
  }
  */
}