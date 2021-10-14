let particles = []
let graviti
function setup() {
  createCanvas(800, 1500)
  gravity = createVector(0, 0.1)
}

function draw() {
  background(0)

  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(width / 2, 0, 5))
  }

  for (let particle of particles) {
    particle.applyForce(gravity)
    particle.update()
    particle.show()
    particle.edges()
  }

  for(let i = particles.length-1; i>=0; i--){
    if(particles[i].finished()){
      particles.splice(i,1)
    }
  }

}
