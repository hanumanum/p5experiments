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


class CircularObject {
    constructor(obj) {
        this.obj = obj
        this.keys = new CircularArray(Object.keys(obj))
        this.currentKey = ""
    }

    next() {
        this.currentKey = this.keys.next()
        const val = this.obj[this.currentKey] 
        return val
    }
}