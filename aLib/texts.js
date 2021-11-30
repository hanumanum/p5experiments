function drawLetterFlower(letter, x, y, Rotations, _textSize) {
  translate(x, y)
  for (let ang = 0; ang <= 2 * PI; ang += PI / Rotations) {
    push()
    fill("black")
    textSize(_textSize)
    rotate(ang)
    text(letter, 0, 0)
    pop()
  }
  translate(-x, -y)
}



function extractPoints(text, xPos, yPos, fSize, sampleFactor, simplifyThreshold) {
  return font.textToPoints(text, xPos, yPos, fSize, {
    sampleFactor, // increase for more points
    simplifyThreshold // increase to remove collinear points
  })
}
