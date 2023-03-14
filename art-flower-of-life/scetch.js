const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 800
const X = CANVAS_WIDTH/2
const Y = CANVAS_HEIGHT/2
const R = 100
const ITERATIONS = 12
const FRAME_RATE = 7
const STROKE_COLOR = "yellow"
const STROKE_WEIGHT = 2

let points = [
  {
    x: X,
    y: Y,
  }
]

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  frameRate(FRAME_RATE)
  
  stroke(STROKE_COLOR)
  strokeWeight(STROKE_WEIGHT)
  noFill()
}

function draw() {
  background("black");
  
  for(let i = 0; i<points.length; i++){
    circle(points[i].x, points[i].y, R);
  }

  for (let p of points) {
    points = points.concat(getCircle6Coords(points, p.x, p.y, R))
  }

  if(frameCount>=ITERATIONS){
    noLoop()
  }
}

function getCircle6Coords(points, x, y, r) {
  let cordsArray = []
  for (let ang = 0; ang < 2 * PI-1; ang += PI / 3) {
    let xn = Math.round(x + (r / 2) * cos(ang)) 
    let yn = Math.round(y + (r / 2) * sin(ang))
    
    if (xn > 0 && xn <= width && yn > 0 && yn <= height) {
      let obj = {
        x: xn,
        y: yn,
      }
      
      if(!isInArray(points,obj.x, obj.y)){
        cordsArray.push(obj)
      }
    }
  }

  return cordsArray
}

function isInArray(arr, x, y){
  for(let a of arr){
    if(a.x==x && a.y==y){
      return true
    }
  }
  return false
}