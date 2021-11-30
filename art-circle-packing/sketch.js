let w = window.innerWidth
let h = window.innerHeight
let padding = 200
let circles = []
let count = 300

function setup() {
  createCanvas(w, h)
  stroke(255)
  noFill()
  circles = addNewRandomClrcle(circles)
}

function draw() {
  background(0)
  if(circles.length<count){
    circles = addNewRandomClrcle(circles)
  }
  else{
    noLoop()
  }
  

  for (let i = 0; i < circles.length; i++) {
    for (let j = 0; j < circles.length; j++) {
      if (circles[i] !== circles[j] && circles[j].increse && areCirclesBounced(circles[i] , circles[j])) {
        circles[i].stop()
        circles[j].stop()
      }
    }
    circles[i].update()
    circles[i].show()
  }

}