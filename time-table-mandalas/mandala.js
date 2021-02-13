let SHOW_NUMBERS = false;

let POINTS_COUNT = 8
let MULTIPLYER = 1

const ITERATIONS = 500 // TODO։ հաշվողական եղանակով գնտել անհրաժեշտ կրկնությունների քանակը
const CANVAS_WIDTH = 450
const CANVAS_HEIGHT = 450
const X = CANVAS_WIDTH / 2
const Y = CANVAS_HEIGHT / 2
const R = 400
const FRAME_RATE = 4
const STROKE_COLOR = "yellow"
const STROKE_WEIGHT = 1
const TEXT_SIZE = 12 
let POINTS = getAnchorPointCoordinates(X,Y,R,POINTS_COUNT);

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  frameRate(FRAME_RATE)

  stroke(STROKE_COLOR)
  strokeWeight(STROKE_WEIGHT)
  noFill()

  textSize(TEXT_SIZE)
}

function draw() {
  POINTS = getAnchorPointCoordinates(X,Y,R,POINTS_COUNT);
  background("black")
  drawScene(X, Y, R, POINTS)
  drawLines(POINTS, MULTIPLYER, POINTS_COUNT)
  text(`mult: ${MULTIPLYER}, points: ${POINTS_COUNT}`, 20, 20)
  MULTIPLYER++
  
}