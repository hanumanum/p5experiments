class Particle {
    constructor(x, y, radius, colorInitial, index) {
        this.index = index
        this.firingNow = false
        this.firedPrev = false
        this.x = x
        this.y = y
        this.velX = int(random([-3, -2, -1, 1, 2, 3]))
        this.velY = int(random([-3, -2, -1, 1, 2, 3]))
        this.colorInitial = colorInitial
        this.colorActual = colorInitial
        this.colorFire = "yellow"

        this.seekRadius = seekRadius
        this.initialRadius = random(2,6)
        this.actualRadius = this.initialRadius

        this.waitTimeInitial = 15//int(random(10, 20))
        this.waitTime = this.waitTimeInitial
        this.fireTimeInitial = 20//int(random(30, 50))
        this.fireTime = this.fireTimeInitial

    }


    fireLight() {
        this.firingNow = true
        this.firedPrev = true
        this.colorActual = this.colorFire
    }

    draw(arrayOfParticles) {
        noStroke()
        this.resetParticle()
        //this.move()

        this.handleCicle()

        if (this.firingNow) {
            if (this.waitTime > 0) {
                this.waitTime--
            }

            if (this.fireTime > 0) {
                this.fireTime--
            }
            else {
                this.firingNow = false
            }
        }

        if (this.waitTime <= 0) {
            this.findClosest(arrayOfParticles)
        }

    }


    handleCicle() {

        fill(this.colorActual)
        if (this.firingNow) {
            ellipse(this.x, this.y, sin(frameCount) * 2 * this.actualRadius)
        }
        ellipse(this.x, this.y, this.actualRadius)
    }

    move() {
        this.x += this.velX
        this.y -= this.velY
        if (this.x > W || this.x < 0) {
            this.velX = -1 * this.velX
        }
        if (this.y < 0 || this.y > H) {
            this.velY = -1 * this.velY
        }
    }

    resetParticle() {
        if (!this.firingNow) {
            this.fireTime = this.fireTimeInitial
            this.waitTime = this.waitTimeInitial
            this.colorActual = this.colorInitial
        }
    }

    findClosest(arrayOfParticles) {
        let minDistanse = Infinity
        let index = -1
        for (let particle of arrayOfParticles) {
            if (particle.index == this.index || particle.firingNow || particle.firedPrev) {
                continue
            }
            let currentDistanse = dist(particle.x, particle.y, this.x, this.y)
            if (minDistanse > currentDistanse) {
                minDistanse = currentDistanse
                index = particle.index
            }
        }


        //console.log(arrayOfParticles[index])
        if (arrayOfParticles[index]) {
            arrayOfParticles[index].fireLight()
        }

    }


    findNeighbors(arrayOfParticles) {
        let neighbors = []
        for (let particle of arrayOfParticles) {
            if (dist(particle.x, particle.y, this.x, this.y) <= this.seekRadius) {
                neighbors.push(neighbors)
            }
        }

        let filtered = this.filterNeighbors(neighbors)
        console.log(filtered)
        return filtered;
    }

    filterNeighbors(neighbors) {
        return shuffle(neighbors).splice(0, random(0, neighbors.length))
    }

}


function shuffle(array) {
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length);

        // If not already shuffled, move it to the new array.
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }

    return copy;
}