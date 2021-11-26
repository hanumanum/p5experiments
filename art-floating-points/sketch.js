const W = 900
const H = 900
const r = 50
const centerX = W / 2
const centerY = H / 2

function setup() {
  createCanvas(W, H)
  noStroke()
  //frameRate(5)
}

function draw() {
  background("black")
  vers1()

}


function vers1() {
  for (let y = r; y <= H; y += r) {
    for (let x = r; x <= W; x += r) {
      let d = dist(x, y, centerX, centerY)
      fill(map(d, 0, W / 2, 255, 0), map(x, 0, W / 2, 255, 0), map(y, 0, W / 2, 255, 0))
      let offX = sin(frameCount / d) * 100
      let offY = sin(frameCount / d) * 100
      ellipse(x + offX +r, y - offY, (x - y) / 80)
    }
  }
}

