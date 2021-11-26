function* genDrawSequence(arr, x, y, r, margin) {
    while (figure = arr.shift()) {
        let genFigure = genDrawLines(figure, x, y, r)
        while (true) {
            yield
            let ggf = genFigure.next()
            if (ggf.done) {
                break
            }
        }
        x += margin

    }
}



function* genDrawLines(arrOfLines, x, y, rotatiion=0, scalation=1) {
    while (_line = arrOfLines.shift()) {
        let genLine = genDrawLine(..._line, "red", "scrape")
        while (true) {
            yield
            push()
            translate(x, y)
            rotate(rotatiion)
            scale(scalation)
            let gg = genLine.next()
            pop()
            if (gg.done) {
                break
            }
        }
    }
}


function* genDrawLine(_x1, _y1, _x2, _y2, linecolor, style = "scrape") {
    let x1 = _x1, y1 = _y1, x2, y2
    const corrdsGen = genBresenhamCoordinatesOfLine(_x1, _y1, _x2, _y2)
    while (true) {
        yield
        let cords = corrdsGen.next()
        if (cords.done) {
            break
        }

        x2 = cords.value.x
        y2 = cords.value.y

        push()
        stroke(linecolor)
        strokeWeight(10 * noise(x1, y1))
        line(x1, y1, x2, y2)
        pop()

        x1 = x2
        y1 = y2
    }
}

function* genBresenhamCoordinatesOfLine(x0, y0, x1, y1) {

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;

    let err = (dx > dy ? dx : -dy) / 2;
    while (true) {
        yield { x: x0, y: y0 }

        if (x0 === x1 && y0 === y1) {
            break;
        }
        if (err > -dx) {
            err -= dy;
            x0 += sx;
        }
        if (x0 === x1 && y0 === y1) {
            break;
        }
        if (err < dy) {
            err += dx;
            y0 += sy;
        }
        if (x0 === x1 && y0 === y1) {
            break;
        }
    }

}

function* genCoordinatesOfLine(x1, y1, x2, y2, step) {

    for (let x = x1; x <= x2; x += step) {
        let a = (y1 - y2) / (x1 - x2)
        let b = y1 - a * x1
        let newY = a * x + b
        yield {
            x: x
            , y: newY
        }
    }
}