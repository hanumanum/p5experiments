const W = window.innerWidth - 200
const H = window.innerHeight - 190
const step = 60

function setup() {
  createCanvas(W, H)
}

function draw() {
  background(0,50)
  for (let y = 0; y < H; y += step) {
    for (let x = 0; x < W; x += step) {
      push()
      translate(x, y)
      rotate(sin(frameCount / 200) * noise(x, y) * 10)
      stroke(0, map(noise(x, y), 0, 1, 10, 255), map(noise(x, y), 0, 1, 100, 255))
      
      line(0, 0, 0, step + sin(frameCount / 1000) * noise(x) * 500)
      translate(x, y)
      pop()
    }
  }


}
