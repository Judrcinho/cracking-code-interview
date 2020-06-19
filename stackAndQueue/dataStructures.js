class Stack {
    constructor() {
        this._data = new Array()
    }

    push(number) {
        this._data.push(number);
    }

    pop() {
        return this._data.pop();
    }

    peek() {
        if (this.isEmpty) return null;

        return this._data[this._data.length - 1];
    }

    get size() {
        return this._data.length;
    }

    get isEmpty() {
        return this._data.length == 0;
    }
}

class Queue {
    constructor() {
        this._data = new Array();
    }

    push(number) {
        this._data.push(number);
    }

    peek() {
        return this._data.length == 0 ? null : this._data[0];
    }

    remove() {
        return this._data.shift();
    }

    get size() {
        return this._data.length;
    }

    get isEmpty() {
        return this._data.length == 0;
    }

}

module.exports =  { Stack, Queue };