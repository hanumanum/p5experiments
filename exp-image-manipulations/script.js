//explinatory for loops and arrays

let _image = {}
let greedSize = 10

function preload() {
  _image = loadImage("strawberry-clipart-animated-9.png")
}

function setup() {
  frameRate(5)
  createCanvas(_image.width, _image.height);

  _image.loadPixels()
  noStroke()
}

function draw() {
  clear()
  for (let y = 0; y < _image.height; y += greedSize) {
    for (let x = 0; x < _image.width; x += greedSize) {
      let ind = (x + y * _image.width) * 4
      let r = _image.pixels[ind + 0]
      let g = _image.pixels[ind + 1]
      let b = _image.pixels[ind + 2]
      let a = _image.pixels[ind + 3]
      fill(r, g, b, a)
      rect(x, y, greedSize)
    }
  }

}