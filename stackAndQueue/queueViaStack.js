const { Stack } = require('./dataStructures');

class QueueViaStack {
    constructor() {
        this._stackNewest = new Stack();
        this._stackOldest = new Stack(); 
    }

    push(number) {
        this._stackNewest.push(number);
    }

    shiftStack() {
        while(!this._stackNewest.isEmpty) {
            let number = this._stackNewest.pop();
            this._stackOldest.push(number);
        }
    }

    peek() {
        if (this._stackOldest.isEmpty) {
            this.shiftStack()
        }

        return this._stackOldest.peek();
    }

    remove() {
        if (this._stackOldest.isEmpty) {
            this.shiftStack()
        }

        return this._stackOldest.pop();
    }
}

let queue = new QueueViaStack();
queue.push(1);
queue.push(2);
queue.push(3);
let i = queue.peek();
queue.remove();
queue.push(4);
