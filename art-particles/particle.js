class Particle {
    constructor(x, y, r = 16, lifetime = random(100,255)) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();// createVector(0, 0);
        this.vel.mult(random(0.1, 0.3))
        this.acc = createVector(0, 0);
        this.r = r;
        this.lifetime = lifetime;
        this.color = random(255)
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        this.lifetime -= 1;
    }

    show() {
        stroke(0);
        strokeWeight(1);
        fill(this.color, this.lifetime);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    finished() {
        return this.lifetime < 0;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    _setRandomColor(){
        this.color = color(random(0,255),random(0,255),random(0,255))
    }

    edges() {
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
            this._setRandomColor()
        }

        if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
            this._setRandomColor()
        } else if (this.pos.x <= this.r) {
            this.pos.x = this.r;
            this.vel.x *= -1;
            this._setRandomColor()
        }
    }

}