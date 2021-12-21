let w = window.innerWidth
let h = window.innerHeight
let padding = 50

function setup() {
  createCanvas(w, h)
  stroke("white")
  strokeWeight(3)
  angleMode(DEGREES)
}

function draw() {
  background(0)

  drawRandomSnowflake(250, 250, 200, "violet", 5)
  noLoop()
}

function drawRandomSnowflake(x, y, size, _color, levels) {
  let angle = 60 //random(10,90)


  for (let i = 0; i < 6; i += 6) {
    drawRandomSnowflakeLeef(i * (2 * size) + 300, h / 2, size, angle, levels)
  }

  /*
  for (let i = 0; i < 360; i += 60) {
    push()
    translate(x, y)
    rotate(i)
    drawRandomSnowflakeLeef(0, 0, size, angle, levels)
    pop()
  }
  */
}


function drawRandomSnowflakeLeef(x, y, size, angle, levels, _newYs=null, _newLeefSizes=null) {
  if (size <= 20) {
    return
  }
  let newYs,newLeefSizes, angles
  let splitCount = 5

  push()
  translate(x, y)
  line(0, 0, 0, size)
  if(newYs ==null && newLeefSizes == null){
    newYs = splitRangeRandomly(0, size, splitCount).sort((a, b) => b - a)
    newLeefSizes = splitRangeRandomly(0, size / 2, splitCount).sort((a, b) => b - a)
    angles = splitRangeRandomly(20, 80, splitCount)
  
  }
  else{
    newYs=_newYs
    newLeefSizes=_newLeefSizes
  }
  
  console.log(newYs, newLeefSizes)
  
  for (let i = 0; i < newYs.length; i++) {
    let newY = newYs[i]
    let newLeefSize = newLeefSizes[i] // newYs[i+i] - newYs[i]
    let angle = angles[i]

    push()
    translate(0, newY)
    rotate(angle)

    //let randomAngle = 30
    //newYs = splitRangeRandomly(0, newLeefSize, 2).sort((a, b) => b - a)
    //newLeefSizes = splitRangeRandomly(0, newLeefSize / 2, 2).sort((a, b) => b - a)

    line(0, 0, 0, newLeefSize)
    //drawRandomSnowflakeLeef(0, newY, newLeefSize, randomAngle, levels, newYs, newLeefSizes)

    /*
    //rotate(-angle)
    rotate(-2 * angle)
    line(0, 0, 0, newLeefSize)
    drawRandomSnowflakeLeef(0, newLeefSize, newY, randomAngle, levels, newYs, newLeefSizes)
    */

    pop()


  }

  pop()



}