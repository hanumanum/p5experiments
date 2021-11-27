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