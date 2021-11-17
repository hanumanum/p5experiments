function drawHeart(size, centerX, centerY, rotation) {
    push()
    noFill();
    beginShape()
    translate(centerX, centerY)
    rotate(rotation)
    for (let t = -PI; t <= PI; t += 0.01) {
        let r = sin(t) * sqrt(abs(cos(t))) / (sin(t) + 7 / 5) - 2 * sin(t) + 2 //heard equation
        let x = size * r * sin(t)
        let y = size * r * cos(t)
        vertex(x, y)
    }
    endShape()
    pop()
}


function drawCardioid(size, centerX, centerY, rotation) {
    push()
    noFill()
    beginShape()
    translate(centerX, centerY)
    rotate(rotation)
    for (let t = -PI; t <= PI; t += 0.01) {
        let r = cardioidParameter - cardioidParameter * sin(t) //cardioid equation
        let x = size * r * sin(t)
        let y = size * r * cos(t)
        vertex(x, y)
    }
    endShape()
    pop()
}
