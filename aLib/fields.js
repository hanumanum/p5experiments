function drawFlowField(points, mult, _noizeDetail = 1, colored = true) {
    angleMode(DEGREES)
    noiseDetail(_noizeDetail)
    //console.log("asd")

    for (let i = 0; i < points.length; i++) {
        let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

        points[i].add(createVector(cos(angle), sin(angle)))

        if(colored){
            let r = map(points[i].x, 0, w, 0, 255)
            let g = 0
            let b = map(points[i].y, 0, h, 0, 255)
            fill(r, g, b)
        }
        else{
            let r = 255, g=255, b=255    
            fill(r, g, b)
        }
        
        ellipse(points[i].x, points[i].y, 2)
    }
}