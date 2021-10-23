const W = 1000
const H = 800
const numberOfParticles = 70
const particles = []
const particleRadius = 8
const seekRadius = 50


function setup() {
  createCanvas(W, H)
  frameRate(30)

  for (let i = 0; i <= numberOfParticles; i++) {
    let x = random(particleRadius, W - particleRadius)
    let y = random(particleRadius, H - particleRadius)
    let newParticle = new Particle(x, y, particleRadius, "white", i)
    particles.push(newParticle)
  }

}

function draw() {
  background('black')

  if (frameCount == 8) {
    initFirstLight(particles)
  }
  drawParticles(particles)
  drawLines(particles)
  //drawCircles(particles)
  startAnew()

}


function startAnew() {
  for (let p of particles) {
    if (!p.firedPrev) {
      return 
    }
  }

  //alert("asdfds")
  for (let p of particles) {
    p.firedPrev = false
  }

  initFirstLight(particles)

}

function initFirstLight(particles) {
  let rndParticle = random(particles)
  rndParticle.findClosest(particles)
  rndParticle.fireLight()

}


function drawParticles(particles) {
  for (let particle of particles) {
    particle.draw(particles)
  }
}

function drawCircles(){
  noFill()
  for (let part1 of particles) {
    for (let part2 of particles) {
      if (part1.index != part2.index && part1.firingNow && part2.firingNow) {
        stroke("yellow")
        strokeWeight(sin(random(0, 2 * PI) / 5) * 1.5)
        ellipse(part1.x, part1.y, dist(part1.x, part1.y, part2.x, part2.y)/4)
        break
      }
    }
  }
}

function drawLines(particles) {
  for (let part1 of particles) {
    for (let part2 of particles) {
      if (part1.index != part2.index && part1.firingNow && part2.firingNow) {
        stroke("yellow")
        strokeWeight(sin(random(0, 2 * PI) / 5) * 1.5)
        line(part1.x, part1.y, part2.x, part2.y)
        break
      }
    }
  }

}