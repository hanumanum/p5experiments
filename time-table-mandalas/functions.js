function drawLines(points, mult, number) {
    for (let n = 0; n < ITERATIONS; n++) {
        let pairPoint = n * mult;
        let pairPointIndex = pairPoint % number

        let currentPointIndex = n % number
        //console.log(n, pairPoint,pairPointIndex)

        //stroke(random(0,255),random(0,255),random(0,255))
        line(points[currentPointIndex].x, points[currentPointIndex].y, points[pairPointIndex].x, points[pairPointIndex].y)
    }
}

function drawScene(x, y, r, points, shownumbers) {
    circle(x, y, r);

    for (let p in points) {
        let po = points[p]
        point(po.x, po.y)
        if (SHOW_NUMBERS) {
            text(p, po.tx, po.ty)
        }
    }

}

function getAnchorPointCoordinates(x, y, r, number) {
    const ANG_DELTA = 2 * Math.PI / number
    const TEXT_R_DELTA = 25
    let points = {}
    let n = 0

    for (let ang = 0; ang < 2 * Math.PI - 0.005; ang += ANG_DELTA) {
        let xn = Math.round(x + (r / 2) * Math.cos(ang))
        let yn = Math.round(y + (r / 2) * Math.sin(ang))
        let xnt = Math.round(x + ((r + TEXT_R_DELTA) / 2) * Math.cos(ang))
        let ynt = Math.round(y + ((r + TEXT_R_DELTA) / 2) * Math.sin(ang))


        points[n] = {
            x: xn,
            y: yn,
            tx: xnt,
            ty: ynt,
        }

        n++
    }

    return points
}