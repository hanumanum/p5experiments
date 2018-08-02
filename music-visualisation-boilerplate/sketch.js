var frame = document.getElementById("frameCount");

function preload() {
  sound = loadSound('TribalSeeds.mp3');
}

function setup() {
  createCanvas(1024, 800);
  fft = new p5.FFT();
  sound.loop();
  frameRate(15);
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  var bass = fft.getEnergy("bass"); //"bass", "lowMid", "mid", "highMid", "treble"
  var waveform = fft.waveform();
  
  
  waveform.forEach(function (m, i) {
    stroke(211, 84, 0);
    line(i, 80, i, 80 - m * 100);
  });

  spectrum.forEach(function (w, i) {
    stroke(84, 153, 199);
    line(i, height, i, height - w);
  });

  frame.innerHTML = frameCount;
}

function mouseClicked() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}