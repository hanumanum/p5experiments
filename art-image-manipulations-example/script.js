//explinatory for loops and arrays

let _image = {}
let greedSize = 4
let lineX = 0

function preload() {
  _image = loadImage("Lion Portrait BW Desktop Wallpaper.jpg")
}

function setup() {
  //frameRate(60)
  createCanvas(_image.width, _image.height);
  _image.loadPixels()
  noStroke()
}

function draw() {
  clear()
  if(frameCount<20){
    image(_image, 0, 0);
    return
  }

  
  stroke("black")
  strokeWeight(1)
  for (let y = 0; y < _image.height; y += greedSize) {
    for (let x = 0; x < _image.width; x += greedSize) {
      let ind = (x + y * _image.width) * 4
      let r = _image.pixels[ind + 0]
      let g = _image.pixels[ind + 1]
      let b = _image.pixels[ind + 2]
      let a = _image.pixels[ind + 3]

      let l = lightness(color(r, g, b, a))
      if(x<lineX){
        fill(0, map(l, 0, 100, 0, 255), 0)
      }
      else{
        fill(r,g,b,a)
      }

      rect(x, y, greedSize)

    }
  }

  stroke("white")
  strokeWeight(2)
  line(lineX, 0, lineX, height)
  lineX += 50
}

function getRandomColor() {
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}