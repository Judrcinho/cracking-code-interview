const {Stack} = require('./dataStructures');

function sortStack(stack) {
    let sortedStack = new Stack();

    while (!stack.isEmpty) {
        let currentVariable = stack.pop();
        
        while(!sortedStack.isEmpty && sortedStack.peek() > currentVariable) {
            stack.push(sortedStack.pop());
        }

        sortedStack.push(currentVariable);
    }

    while(!sortedStack.isEmpty) {
        stack.push(sortedStack.pop());
    }
}

let stack = new Stack();
stack.push(1);
stack.push(10);
stack.push(5);
stack.push(15);
stack.push(2);

sortStack(stack);