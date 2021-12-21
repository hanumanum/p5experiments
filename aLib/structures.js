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