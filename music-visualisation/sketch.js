var frame = document.getElementById("frameCount");

let xS = [];
let yS = [];
let rS = [];

function preload() {
  sound = loadSound('TribalSeeds.mp3');
}

function setup() {
  createCanvas(1024, 1000);
  fft = new p5.FFT();
  sound.loop();
  frameRate(15);
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  var bass = fft.getEnergy("bass"); //"bass", "lowMid", "mid", "highMid", "treble"
  var waveform = fft.waveform();
  
  //console.log(max(spectrum), min(spectrum), spectrum.length);
  //console.log(max(waveform), min(waveform), waveform.length);
  //stroke(random(0, 255), random(0, 255), random(0, 255));
  //noFill();


  
  if(bass > 200){
    xS.push(random(0,width));
    yS.push(random(0,height));
    rS.push(random(5,100));
  }

  xS.forEach(function(x,i){
    yS[i]+=1;
    rS[i]-=1;
    
    if(yS[i]>height || rS[i]<0){
      xS.splice(i, 1);
      yS.splice(i, 1);
      rS.splice(i, 1);
    }

    if(frameCount<540){
      line(xS[i], yS[i], width/2, height/2);
    }
    else if(frameCount>540 && frameCount<1100){
      ellipse(xS[i], yS[i], rS[i]);
      //line(xS[i], yS[i], width/2, height/2);
    }
    else{
      ellipse(xS[i], yS[i], rS[i]);
      line(xS[i], yS[i], width/2, height/2);
    }
  });



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