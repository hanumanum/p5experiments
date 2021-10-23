const W = 800
const H = 800
let CHORDS = []
let r = 5
const rStep = 40
const COUNT = 18

function setup() {
  createCanvas(W, H)
  strokeWeight(5)
  createChords()
}

function draw() {
  //clear()
  background(10, 12)
  noFill();

  for(let i=0; i<CHORDS.length; i++){
    stroke(CHORDS[i].color)
    arc(CHORDS[i].x, CHORDS[i].y, CHORDS[i].radius, CHORDS[i].radius, CHORDS[i].startAngl, CHORDS[i].stopAngl, OPEN, 50)
    //customArc(CHORDS[i].x, CHORDS[i].y, CHORDS[i].radius, CHORDS[i].radius, CHORDS[i].startAngl, CHORDS[i].stopAngl, 0.0001)
    CHORDS[i].startAngl +=CHORDS[i].angleDirection * CHORDS[i].angleStep 
    CHORDS[i].stopAngl += CHORDS[i].angleDirection* CHORDS[i].angleStep
    //CHORDS[i].radius += Math.sin(frameCount) * 10
    
  } 
  //console.log(Math.sin(frameCount)) 

  
  if(frameCount%170==0){
    createChords()
  }
  
}


function createChords(){
  CHORDS = []
  r=5
  for(let i=0; i<COUNT; i++){
    CHORDS.push(createNewCord())
  }
}

function createNewCord(){
  
  return {
    x:W/2,//random(0, W),
    y:H/2, //random(0, H),
    radius:r+=rStep,
    startAngl:Math.random()*10,
    stopAngl:Math.random()*10,
    color: getRandomColor(),
    radiusStep:Math.random(),
    angleStep:Math.random()/10,
    angleDirection:randomDirection()
  }
}

function getRandomColor() {
  //const colors = ["#fd00ff","#fdff00","#00ff38","#00f9ff","#3c00ff"]
  const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
  return random(colors)
}

function randomDirection(){
  return (Math.random() > 0.5) ? 1 : -1;
}