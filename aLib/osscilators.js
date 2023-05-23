//Only works in p5 context
function oscillate_linear(x1, y1, x2, y2, speed) {
  //MATH referance: https://skysmart.ru/articles/mathematic/grafik-linejnoj-funkcii
  let a = (y1 - y2) / (x1 - x2)
  let b = y1 - a * x1
  let iter = sin(frameCount / speed)
  let newX = map(iter, -1, 1, x1, x2)
  let newY = a * newX + b
  ellipse(newX, newY, random(1, 5))
}

//Only works in p5 context
function oscilate_trig(value, speed = 1, amplitude, triganometricFunc) {
  return value + speed * triganometricFunc((frameCount)) * amplitude
}

function oscilate_between(min, max, step) {
  let iter = sin(frameCount / (step ? step : 1))
  const m = map(iter, -1, 1, min, max)
  return m
}

function oscilate_tikle(number, offset) {
  return number + random(-offset, offset)
}