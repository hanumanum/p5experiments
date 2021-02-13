let SHOW_NUMBERS = false;

const ITERATIONS = 500 // TODO։ հաշվողական եղանակով գնտել անհրաժեշտ կրկնությունների քանակը
const D = 100
const R = D / 2
const FRAME_RATE = 4
let STROKE_COLOR = "blue"
const STROKE_WEIGHT = 2
const TEXT_SIZE = 10
const OFFSET = 20;
/*
let points_range = prompt("Ներմուծեք կետերի միջակայքը \n արժեքները բաժանել ստորակետերով")
let multiplyers_range = prompt("Ներմուծեք բազմապատիկների միջակայքը \n արժեքները բաժանել ստորակետերով") 

points_range = "100, 110"
multiplyers_range = "2, 7"

const MULTIPLYER_MIN = parseInt(multiplyers_range.split(",")[0])
const MULTIPLYER_MAX = parseInt(multiplyers_range.split(",")[1])

const POINTS_COUNT_MIN = parseInt(points_range.split(",")[0])
const POINTS_COUNT_MAX = parseInt(points_range.split(",")[1])
*/

let multMin = 10
let multMax = 30

let countMin = 10
let countMax = 30
var gui

function setup() {
  //sliderRange(0, 1000, 10);
  //gui = createGui('Controls');
  //gui.addGlobals('multMin', 'multMax', 'countMin', 'countMax');
  createCanvas((multMax - multMin + 1) * (D + OFFSET) + OFFSET, (countMax - countMin + 1) * (D + OFFSET) + OFFSET)
  //createSlider(1, 200, 3)
  frameRate(FRAME_RATE)

  stroke(STROKE_COLOR)
  strokeWeight(STROKE_WEIGHT)
  noFill()

  textSize(TEXT_SIZE)
  noLoop()
}

function draw() {

  background("black")
  let y = R + OFFSET

  for (let pn = countMin; pn <= countMax; pn++) {
    STROKE_COLOR = getRndColor();
    
    let x = R + OFFSET
    for (let mp = multMin; mp <= multMax; mp++) {
      stroke(STROKE_COLOR)
      points = getAnchorPointCoordinates(x, y, R, pn);
      
      drawScene(points, x, y, R, SHOW_NUMBERS)

      push()
      noStroke()
      fill("white")
      text(`(${pn},${mp})`, x - 10, y - D / 2 - 6)
      pop()
      
      drawLines(points, mp, pn)
      x += D + OFFSET
    }

    y += D + OFFSET

  }

  //noLoop()

}