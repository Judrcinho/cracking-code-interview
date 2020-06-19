const {Stack} = require('./dataStructures');

class StackWthMinValue extends Stack {
    constructor() {
        super();
        this._minValues = new Array();
    }

    push(number) {
        let currentMin = super.isEmpty ? Number.MAX_SAFE_INTEGER : this._minValues[this._minValues.length - 1];
        let nextMin = currentMin < number ? currentMin : number;

        this._data.push(number);
        this._minValues.push(nextMin);
    }

    getMin() {
        return this._minValues[this._minValues.length - 1];
    }

    pop() {
        this._minValues.pop();

        return super.pop();
    }
}

let stackWithMinValue = new StackWthMinValue();
stackWithMinValue.push(5);
stackWithMinValue.push(10);
let min = stackWithMinValue.getMin();
stackWithMinValue.push(1);
stackWithMinValue.push(20);
min = stackWithMinValue.getMin();
stackWithMinValue.pop();
stackWithMinValue.pop();
stackWithMinValue.pop();
min = stackWithMinValue.getMin();

