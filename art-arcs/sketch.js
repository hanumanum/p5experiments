const W = 800
const H = 800
let CHORDS = []
let R = 5
const rStep = 40
const COUNT = 18
const MAGIC_NUMBER = 170

function setup() {
  createCanvas(W, H)
  strokeWeight(5)
  createChords()
}

function draw() {
  //clear()
  background(10, 12)
  noFill();

  for (let i = 0; i < CHORDS.length; i++) {
    stroke(CHORDS[i].color)
    arc(CHORDS[i].x, CHORDS[i].y, CHORDS[i].radius, CHORDS[i].radius, CHORDS[i].startAngl, CHORDS[i].stopAngl, OPEN, 50)
    CHORDS[i].startAngl += CHORDS[i].angleDirection * CHORDS[i].angleStep
    CHORDS[i].stopAngl += CHORDS[i].angleDirection * CHORDS[i].angleStep

  }


  if (frameCount % MAGIC_NUMBER == 0) {
    createChords()
  }

}


function createChords() {
  CHORDS = []
  R = 5
  for (let i = 0; i < COUNT; i++) {
    CHORDS.push(createNewCord())
  }
}

function createNewCord() {

  return {
    x: W / 2,//random(0, W),
    y: H / 2, //random(0, H),
    radius: R += rStep,
    startAngl: Math.random() * 10,
    stopAngl: Math.random() * 10,
    color: getRandomColor(),
    radiusStep: Math.random(),
    angleStep: Math.random() / 10,
    angleDirection: randomDirection()
  }
}


function mouseClicked() {
  createChords()
  frameCount=0
}