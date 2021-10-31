const getEmptyLetterMatrix = function () {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
}


function makeAlphabet(lettersCount) {
    const alphabet = []
    for (let i = 0; i < lettersCount; i++) {
        let emptyLetterMatrix = getEmptyLetterMatrix()
        let matrix = makeRandomLetterGrid(emptyLetterMatrix)
        alphabet.push(matrix)
    }

    return alphabet
}

function drawAllAlphabet(alphabet, rowsCount, fontSize, lettersMargin, startX, startY) {
    let letterMatrix = alphabet[0]
    let iter = 0
    let size = fontSize / letterMatrix.length

    for (let i = 0; i < rowsCount; i++) {
        let yl = startY + i * size * letterMatrix[0].length + i * lettersMargin

        for (let j = 0; j < alphabet.length / rowsCount; j++) {
            let xl = startX + j * size * letterMatrix.length
            let matrix = alphabet[iter]
           // drawLetterGrid(matrix, xl, yl, fontSize)
            drawLetterByLines(matrix, xl, yl, fontSize, 2, "#50FF3B")
            iter++
        }
    }
}

function drawLetterByLines(matrix, x, y, fontSize, _strokeWeight, _textColor) {
    //Find and fill vertical lines
    let size = fontSize / matrix.length
    for (let i = 0; i < matrix[0].length; i++) {
        let currentX = undefined
        let currentY = undefined
        let prevX = undefined
        let prevY = undefined
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] == 1) {
                currentX = x + i * size
                currentY = y + j * size
                if (prevX != undefined && prevY != undefined) {
                    push()
                    stroke(_textColor)
                    strokeCap(ROUND)
                    strokeWeight(_strokeWeight)
                    line(prevX, prevY, currentX, currentY)
                    pop()
                }

                prevX = currentX
                prevY = currentY

            }
        }
    }

    //Find and fill horizontal lines
    for (let i = 0; i < matrix.length; i++) {
        let currentX = undefined
        let currentY = undefined
        let prevX = undefined
        let prevY = undefined
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                currentX = x + j * size
                currentY = y + i * size
                if (prevX != undefined && prevY != undefined) {
                    push()
                    stroke(_textColor)
                    strokeCap(ROUND)
                    strokeWeight(_strokeWeight)
                    line(prevX, prevY, currentX, currentY)
                    pop()
                }

                prevX = currentX
                prevY = currentY

            }
        }
    }

}


function makeRandomLetterGrid(letterMatrix) {
    let anchorPointsCount = random(letterMatrix.length * letterMatrix[0].length / 3, letterMatrix.length * letterMatrix[0].length)
    let letterMatrixAnchored = setRandomAnchorePoints(letterMatrix, anchorPointsCount)
    return letterMatrixAnchored
}

function setRandomAnchorePoints(_matrix, count) {
    for (let c = 0; c < count; c++) {
        let i = int(random(0, _matrix.length))
        let j = int(random(0, _matrix[0].length))
        _matrix[i][j] = 1
    }
    return _matrix;
}

function drawLetterGrid(letterMatrix, x, y, fontSize) {
    push()
    strokeWeight(1)

    let size = fontSize / letterMatrix.length
    for (let i = 0; i < letterMatrix.length; i++) {
        let yp = y + i * size
        for (let j = 0; j < letterMatrix[i].length; j++) {
            let xp = x + j * size

            if (letterMatrix[i][j] == 0) {
                fill("gray")

            }
            else if (letterMatrix[i][j] == 1) {
                fill("white")
            }

            circle(xp, yp, 2)

        }
    }
    pop()
}