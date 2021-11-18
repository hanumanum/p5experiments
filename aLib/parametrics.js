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


function drawNoizyCircle(x, y, r, density) {
    beginShape()
    for (let a = 0; a <= 2 * PI; a += (2 * PI) / density) {
      let xn = x + r * cos(a)
      let yn = y + r * sin(a)
      let xo = noise(xn, yn) * 5
      let yo = noise(xn, yn) * 5
  
      vertex(xn + xo, yn + yo)
    }
    endShape(CLOSE)
  
  }


  function drawPolygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}   