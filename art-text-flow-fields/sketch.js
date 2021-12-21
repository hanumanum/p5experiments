let w = window.innerWidth
let h = window.innerHeight
let greedSize = 10

let font
const fSize = 400
const msg = 'Կորա՞ր'
let points = []
let circles = []

function preload() {
  font = loadFont('../aFonts/Arian_Grqi_U.ttf')
}

function setup() {
  createCanvas(w, h)
  background("black")
  fill("white")
  //frameRate(5)

  textSize(fSize)
  textFont(font)
  text(msg, 100, fSize)

  //noLoop()
  loadPixels()
  for (let y = 0; y < height; y += greedSize) {
    for (let x = 0; x < width; x += greedSize) {
      let ind = (x + y * width) * 4
      let r = pixels[ind + 0]
      let g = pixels[ind + 1]
      let b = pixels[ind + 2]
      let a = pixels[ind + 3]
      let brightness = (r + g + b) / 3
      if (brightness > 5) {
        fill(r, g, b, a)
        points.push(createVector(x, y))
        rect(x, y, greedSize)
      }
    }

  }
  clear()

  background("black")

  //fill("white")
  //background("")
}

function draw() {
  //background(0)
  if (frameCount % 100 == 0) {
    background(0)
  }

  drawFlowField(points, 0.001, 0, false)
}
