const gridSize = 50;
let video;

function mouseClicked(){
  video = createCapture(VIDEO)
  video.size(width,height)
  video.hide()
  loop()
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noLoop()
}

function draw() {
  if( video === undefined){
    return
  }
  background("black")
  let gridSize = int(map(mouseX, 0, width, 15, 50))

  video.loadPixels()
  for(let y=0; y<=video.height; y+=gridSize){
    for(let x=0; x<=video.width; x+=gridSize){
      let index = (y*video.width + x) * 4
      let r = video.pixels[index]
      let dia = map(r, 0, 255, gridSize, 2)

      fill(0)
      noStroke()
      ellipse(x*gridSize/2, y*gridSize/2, dia)

    } 
  }


}


function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
  //return color(random(255), random(255), random(255))
}