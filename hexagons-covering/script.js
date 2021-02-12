let screenWidth = 768;
let screenHeight = 500;
let cellSizeInitial = 10 , cellSize = 10
let cols = screenWidth/cellSize//[3,4,6,5,20,20,5];
let rows = screenHeight/cellSize;

let grid = [];
let xOffset = 0;
let yOffset = 0;
let yellows = ["#ff9f0088","#ffb50088","#ffca0088","#ffdff088","#fff40088","#f5ff0088","#dfff0088"]
let _image = {}

function preload(){
  _image = loadImage("IMG_7961-3.jpeg")
}

function setup () {
    createCanvas(screenWidth, screenHeight);
    //frameRate(5)
    _image.resize(screenWidth,0)
    makeCells(xOffset,yOffset)
    
}

function draw () {
    image(_image,0,0)
    //cellSize = random(cellSizeInitial, cellSizeInitial+2)
    for(let i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    //if(frameCount%20==0){
      for(let i=0; i<10; i++){
        let removeIndex = int(random(0, grid.length))
        grid.splice(removeIndex,i)
      }
    //}


    
    if(frameCount%10==0){
      return
      grid = []
      cols = getRandomsArray(8, 5, 10)
      xOffset = int(random(0, screenWidth))
      yOffset = int(random(0, screenHeight))
      //cols = getRandomsArray(5,4,10) 
      makeCells(xOffset, yOffset)
    }
    
}

function makeCells(xOffset, yOffset){
  for(let j = 0; j < rows; j++) {
    //let cnt = cols.pop()
      for(let i = 0; i < cols ; i++) {
          let cell = new Cell(i, j, xOffset, yOffset);
          grid.push(cell);
      }
  }
}

function Cell(i, j, xOffset, yOffset) {
    this.i = i;
    this.j = j;

    if(j % 2 === 0) {
        this.x = this.i * cellSize * 2 + xOffset;
    } else {
        this.x = this.i * cellSize * 2 + cellSize + xOffset;
    }
    
    this.y = this.j * cellSize * 1.7 + yOffset;

    this.show = function () {
        stroke(255, 255, 255, 50)
        fill(random(yellows));

        push(); 
        translate(this.x, this.y);
        rotate(radians(30));
        polygon(0, 0, cellSize, 6);
        pop();
    }
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}   

function getRandomsArray(len, min, max){
  let randoms = []
  for(let i=0; i<len; i++){
    randoms.push(int(random(min,max)))
  }

  return randoms;
}