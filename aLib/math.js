function randomDirection() {
    return (Math.random() > 0.5) ? 1 : -1;
}

function getRandomsArray(len, min, max) {
    let randoms = []
    for (let i = 0; i < len; i++) {
        randoms.push(int(random(min, max)))
    }

    return randoms;
}

function getRandomSubArray(arrFrom, numberOfValues) {
    if (numberOfValues >= arrFrom.length) {
        return arrFrom
    }

    return shuffleArray(arrFrom).slice(0, numberOfValues)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

async function getQuantumRandomNumbers(length = 1) {
    const url = `https://qrng.anu.edu.au/API/jsonI.php?length=${length}&type=uint8`
    const response = await fetch(url)
    const json = await response.json()
    return json.data
}

function splitRangeRandomly(min, max, numberOfValues) {
    let values = []
    for (let i = 0; i < numberOfValues; i++) {
        values.push(int(random(min, max)))
    }
    values.sort((a, b) => a - b)
    return values
}

Array.prototype.shiftRandom = function () {
    return shuffleArray(this).shift()
}

