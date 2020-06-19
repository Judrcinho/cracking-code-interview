const { Stack } = require('./dataStructures');

class SetOfStacks {
    constructor(maxElements) {
        this._maxElements = maxElements;
        this._stacks = [];
    }

    push(number) {
        if (this._stacks.length != 0 && this._stacks[this._stacks.length - 1].length != this._maxElements)
        {
            let lastStack = this._stacks[this._stacks.length - 1];
            lastStack.push(number);
        } else {
            let newArray = new Array();
            newArray.push(number)
            this._stacks.push(newArray);
        }
    }

    pop() {
        let numberOfStacks = this._stacks.length;
        let elementToReturn = this._stacks[numberOfStacks - 1].pop();

        if (this._stacks[numberOfStacks - 1].length == 0) {
            this._stacks.pop();
        }

        return elementToReturn;
    }

    popAt(number) {
        if (number > this._stacks.length - 1) {
            return false;
        }

        let elementToReturn = this._stacks[number].pop();

        if (this._stacks[number].length == 0) {
            this._stacks.splice(number, 1);
        }

        return elementToReturn;
    }
}

let setStack = new SetOfStacks(2);

setStack.push(1);
setStack.push(2);
setStack.push(3);
setStack.push(4);
setStack.push(5);
setStack.push(6);
el = setStack.popAt(1);
el = setStack.popAt(1);
setStack.push(5);
setStack.push(6);