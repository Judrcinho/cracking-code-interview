const {LinkedListNode} = require('./LinkedList');

function findIntersection(headOne, headTwo) {
    let firstListStack = new Array();
    let secondListStack = new Array();

    while (headOne != null) {
        firstListStack.push(headOne);
        headOne = headOne.next;
    }
    while (headTwo != null) {
        secondListStack.push(headTwo);
        headTwo = headTwo.next;
    }

    let firstCurrent = firstListStack.pop();
    let secondCurrent = secondListStack.pop();

    if (firstCurrent != secondCurrent) {
        return false;
    }


    while(firstListStack.length > 0 && secondListStack.length > 0) {
        let firstNext = firstListStack.pop();
        let secondNext = secondListStack.pop();

        if (firstNext != secondNext) {
            return firstCurrent;
        }

        firstCurrent = firstNext;
        secondCurrent = secondNext;
    }

    return firstCurrent;
}

let a = new LinkedListNode('a');
let b = new LinkedListNode('b');
let c = new LinkedListNode('c');
let d = new LinkedListNode('d');
let e = new LinkedListNode('e');
let f = new LinkedListNode('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

let a1 = new LinkedListNode('a1');
let b1 = new LinkedListNode('b1');
let c1 = new LinkedListNode('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

console.log(findIntersection(a, a1));