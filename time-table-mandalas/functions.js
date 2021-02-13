function drawLines(points, mult, number) {
    for (let n = 0; n < ITERATIONS; n++) {
        let pairPoint = n * mult;
        let pairPointIndex = pairPoint % number

        let currentPointIndex = n % number
        line(points[currentPointIndex].x, points[currentPointIndex].y, points[pairPointIndex].x, points[pairPointIndex].y)
    }
}

function drawScene(points,x, y, r, shownumbers) {
    circle(x, y, r*2);

    for (let p in points) {
        let po = points[p]
        //point(po.x, po.y)
        if (shownumbers) {
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
        let xn = x + (r) * Math.cos(ang)
        let yn = y + (r) * Math.sin(ang)
        let xnt = Math.round(x + ((r + TEXT_R_DELTA)) * Math.cos(ang))
        let ynt = Math.round(y + ((r + TEXT_R_DELTA) ) * Math.sin(ang))

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


function getRndColor(){
    return color(random(0, 255),random(0, 255),random(0, 255));
}