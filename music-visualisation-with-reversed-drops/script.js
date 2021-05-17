let drops = []
let canvasWidth = 1000
let canvasHeight = 1000
let dropR = 150
let colors = ["#63E6E8", "#4232C7", "#DD302A", "#EBE761", "#0000FF", "#65E563", "#E2248A"]
let sound
let soundLooping = false
let fft, spectrum = [], bass = [], waveform = []

class Drop {
  constructor(x, y, r, i) {
    this.i = i
    this.x = x
    this.y = y
    this.r = r
    this.r0 = this.r
    this.r1 = this.r + 75
    this.r2 = this.r + 50
    this.r3 = this.r + 35
    this.opacity = 100
    this.speed = 10
    this.color = color(random(colors))
  }

  update() {
    if (this.r0 >= 0) {
      this.r0 -= this.speed
    }

    if (this.r1 >= 0) {
      this.r1 -= this.speed
    }

    if (this.r2 >= 0) {
      this.r2 -= this.speed
    }

    if (this.r3 >= 0) {
      this.r3 -= this.speed
    }

    this.opacity -= 0.5
    this.color.setAlpha(this.opacity)

    if (this.r0 <= 0 && this.r1 <= 0 && this.r2 <= 0 && this.r3 <= 0) {
      for (let i = 0; i < drops.length; i++) {
        if (drops[i].i == this.i) {
          drops.slice(i, 1)
        }
      }
    }

  }

  show() {
    noFill()
    stroke(this.color)
    circle(this.x, this.y, this.r0)

    if (this.r1 >= 0) {
      circle(this.x, this.y, this.r1)
    }

    if (this.r2 >= 0) {
      circle(this.x, this.y, this.r2)
    }

    if (this.r3 >= 0) {
      circle(this.x, this.y, this.r3)
    }
  }
}


function preload() {
  sound = loadSound('audio.m4a');
}

function mouseClicked() {
  sound.loop();
}


function setup() {
  createCanvas(1000, 1000)
  amp = new p5.Amplitude()
  fft = new p5.FFT(0.5, 1024);
}

function draw() {

  background("black")
  var spectrum = fft.analyze()
  var bassR = fft.getEnergy("bass") //"bass", "lowMid", "mid", "highMid", "treble"
  var trebleR = fft.getEnergy("treble") //"bass", "lowMid", "mid", "highMid", "treble"
  var waveform = fft.waveform()

  /*
  if(bassR > 200){
    let drop = new Drop(canvasWidth / 2 + random(-300, 300), canvasWidth / 2 + random(-300, 300), bassR, drops.length)
    drops.push(drop)
  }
  */

  //if(trebleR > 100){
  let drop = new Drop(random(0,canvasWidth), random(canvasWidth,0), trebleR, drops.length)
  drops.push(drop)
  //}


  for (let drop of drops) {
    drop.update()
    drop.show()
  }


  for (let i = 0; i < 100; i++) {
    stroke("white")
    let x = random(0, canvasWidth)
    let y = random(0, canvasHeight)
    point(x, y)
  }




  //console.log(max(spectrum))
  /*
  waveform.forEach(function (m, i) {
    stroke(211, 84, 0);
    line(i, 80, i, 80 - m * 100);
  });
  */
  /*
  spectrum.forEach(function (w, i) {
    stroke(84, 153, 199)
    line(i, height, i, height - w);
  })
  */

}