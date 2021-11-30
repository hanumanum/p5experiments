class CircleForPacking {
    constructor(x, y, r, strokeColor="white", oscilateOnEnd = false) {
        this.x = int(x)
        this.y = int(y)
        this.r = int(r)
        this.dr = 1
        this.increse = true
        this.strokeWeight = int(random(1,4))
        this.strokeColor = strokeColor
        this.oscilateOnEnd = oscilateOnEnd
    }

    show() {
        noFill()
        stroke(this.strokeColor)
        strokeWeight(this.strokeWeight)
        if(!this.increse && this.oscilateOnEnd){
            ellipse(this.x, this.y, this.r * 2 + map(sin(frameCount/this.r), -1,1, -5 , 5))
            point(this.x, this.y)
        }
        else{
            ellipse(this.x, this.y, this.r * 2)
            point(this.x, this.y)
            
        }
        
    }

    stop() {
        this.increse = false
    }

    update() {
        if (this.increse) {
            this.r += this.dr
        }
    }

}

function addNewRandomClrcle(circles) {
    let x = random(padding, w - padding)
    let y = random(padding, h - padding)
    let r = random(5)
    let crcl = new CircleForPacking(x, y, r, getRandomColorV2())
    if (isInEmptySpace(crcl, circles)) {
        circles.push(crcl)
    }

    return circles
}

function isInEmptySpace(circle, circles) {
    for (let c of circles) {
        if (areCirclesBounced(c, circle)) {
            return false
        }
    }
    return true
}

function areCirclesBounced(circle1, circle2) {
    if (dist(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.r + circle2.r + circle1.strokeWeight + circle2.strokeWeight) {
      return true
    }
    return false
  }