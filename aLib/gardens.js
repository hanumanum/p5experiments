const garden_random = (number, width, height, type = "array") => {
    let arr = [];
    for (let i = 0; i < number; i++) {
        if (type == "array") {
            arr.push([
                getRandomInt(0, width),
                getRandomInt(0, height)
            ]);
        }
        else {
            arr.push({
                x: getRandomInt(0, width),
                y: getRandomInt(0, height)
            });
        }
    }
    return arr;
}

const garden_grid = (widht, height, stepx, stepy, type = "array") => {
    let arr = [];
    for (let x = stepx; x < widht; x += stepx) {
        for (let y = stepy; y < height; y += stepy) {
            if (type == "array") {
                arr.push([parseInt(x), parseInt(y)]);
            }
            else {
                arr.push({ x: parseInt(y), y: parseInt(y) });
            }
        }
    }
    return arr;
}

const garden_circular = (centerX, centerY, radius, stepPi, type = "array") => {
    let arr = [];
    for (let i = 0; i <= 2 * Math.PI; i += stepPi) {
        let x = parseInt(centerX + radius * Math.cos(i));
        let y = parseInt(centerY + radius * Math.sin(i));
        if (type == "array") {
            arr.push([x, y]);
        }
        else {
            arr.push({ x: x, y: y });
        }
    }
    return arr;
}

const garden_circular_concentric = (centerX, centerY, radiusFull, stepPi, radiusStep, type = "array") => {
    let array = []
    for(let r = radiusFull; r >= 0; r -= radiusStep) {
        console.log(r, stepPi, centerX, centerY)
        
        array = array.concat(garden_circular(centerX, centerY, r, stepPi, type));
    
    }

    return array
}