let font
let fSize // font size
let msg // text to write
let pts = [] // store path data
let ptsInit = []

function preload() {
  // preload OTF font file
  font = loadFont('Arian_Grqi_U.ttf')
}

function setup() {
  createCanvas(1300, 500)

  fSize = 150
  textFont(font)
  textSize(fSize)
  msg = 'Է ն տ ր ո պ ի ա'
  pts = font.textToPoints(msg, 60, 300, fSize, {
    sampleFactor: 0.3, // increase for more points
    simplifyThreshold: 0.0 // increase to remove collinear points
  })
  //console.log(pts) // { x, y, path angle }

  stroke(255)
  strokeWeight(2)
  noFill();
}

function draw() {
  background(0)


  for (let i = 0; i < pts.length; i++) {
    const p = pts[i]
    point(p.x, p.y)
  }
}
