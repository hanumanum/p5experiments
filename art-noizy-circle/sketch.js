let circles = []

function setup() {
  createCanvas(1000, 1000)
  background("black")
  circles = generateCircles(10)
   
}

function draw() {
  for(let c of circles){
    noizyCirles(c[0], c[1], c[2])  
  }

  if(frameCount%200==0){
    circles = generateCircles(10)
    background("black")
  }

}


function generateCircles(number){
  const cicrles = []
  
  for(let i = 0; i<=number; i++){
    cicrles.push(
      [
        Math.floor(random(0, width)),
        Math.floor(random(0, height)),
        Math.floor(random(50, 200))
      ]
    )
  }


  return cicrles

}


function noizyCirles(x0, y0, r) {
  //background("black")
  stroke("white")
  for (let ang = 0; ang < 2 * Math.PI; ang += 0.01) {
    let b = random(100, 500)
    let nx = noise(b) * 100
    let ny = noise(b) * 100

    let x = x0 + (r + nx) * Math.cos(ang)
    let y = y0 + (r + ny) * Math.sin(ang)

    point(x, y)

  }

}
