let SHOW_NUMBERS = false;

const ITERATIONS = 500 // TODO։ հաշվողական եղանակով գնտել անհրաժեշտ կրկնությունների քանակը
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
const X = CANVAS_WIDTH / 2
const Y = CANVAS_HEIGHT / 2
const R = 270
const FRAME_RATE = 4
const STROKE_COLOR = "yellow"
const STROKE_WEIGHT = 1
const TEXT_SIZE = 12 

let points_count = 3
let multiplyer = 1

let points //= getAnchorPointCoordinates(X,Y,R,points_count);

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  frameRate(FRAME_RATE)

  stroke(STROKE_COLOR)
  strokeWeight(STROKE_WEIGHT)
  noFill()

  textSize(TEXT_SIZE)
}

function draw() {
  points = getAnchorPointCoordinates(X,Y,R,points_count);
  background("black")
  drawScene(points, X, Y, R, SHOW_NUMBERS)
  drawLines(points, multiplyer, points_count)
  text(`points: ${points_count}, mult: ${multiplyer}`, 20, 20)
  multiplyer++
}

function mouseClicked(){
  multiplyer--
  noLoop()
}

function keyPressed(){
  loop()
  if(keyCode === LEFT_ARROW){
    points_count--
  }
  else if(keyCode === RIGHT_ARROW){
    points_count++
  }
  multiplyer=1
}