class CircularArray {

    constructor(arr) {
        this.array = arr
        this.index = 0
    }

    next() {
        if (this.index == this.array.length) {
            this.index = 0
        }

        return this.array[this.index++]
    }
}


function getRandomsArray(len, min, max) {
    let randoms = []
    for (let i = 0; i < len; i++) {
        randoms.push(int(random(min, max)))
    }

    return randoms;
}