let w = window.innerWidth - 200
let h = window.innerHeight - 200
let greedSize = 10
const msgs = ['Gone ?', 'Done ?', 'Why ?', 'Where ?']

let font
const fSize = 400
let msg = msgs.shift()
let points = []
let circles = msgs[0]

function preload() {
  font = loadFont('../aFonts/Arian_Grqi_U.ttf')
}

function setup() {
  createCanvas(w, h)

  setUpWord()
  //noLoop()
}


function setUpWord() {
  points = []
  background("black")
  fill("blue")

  textSize(fSize)
  textFont(font)
  text(msg, 200, fSize)
  loadPixels()
  for (let y = 0; y < height; y += greedSize) {
    for (let x = 0; x < width; x += greedSize) {
      let ind = (x + y * width) * 4
      let r = pixels[ind + 0]
      let g = pixels[ind + 1]
      let b = pixels[ind + 2]
      let a = pixels[ind + 3]
      let brightness = (r + g + b) / 10
      if (brightness > 5) {
        fill(r, g, b, a)
        points.push(createVector(x, y))
        rect(x, y, greedSize)
      }
    }

  }
  clear()
  background("black")

}

function draw() {
  if (frameCount % 400 == 0 && msgs.length > 0) {
    msg = msgs.shift()
    setUpWord()
  }

  
  if (frameCount % 200 == 0) {
    background(0) 
  }


  drawFlowField(points, 0.001, 10, false)
}
