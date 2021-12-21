let w = window.innerWidth
let h = window.innerHeight
let greedSize = 25

let font
const fSize = 600
const msg = 'Շունչ'
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
  text(msg, 100, 600)



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
        points.push(new CircleForPacking(x, y, random(1, 2),"green", true))
        rect(x, y, greedSize)
      }
    }
    clear()
  }

}

function draw() {
  background(0)

  for (let i = 0; i < 10; i++) {
    if (points.length > 0) {
      circles.push(points.shiftRandom())
    }
  }

  for (let i = 0; i < circles.length; i++) {
    for (let j = 0; j < circles.length; j++) {
      if (circles[i] !== circles[j] && circles[j].increse && areCirclesBounced(circles[i], circles[j])) {
        circles[i].stop()
        circles[j].stop()
      }
    }
    circles[i].update()
    circles[i].show()
  }
  
  
}
