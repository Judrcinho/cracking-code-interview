const {LinkedListNode} = require('./LinkedList');

function detectLoop(head) {
    let fastPointer = head;
    let slowPointer = head;

    while (fastPointer != null && fastPointer.next != null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;

        if (fastPointer == slowPointer)
            break;
    }

    if (!fastPointer || !fastPointer.next){
        return false;
    }

    fastPointer = head;

    while (fastPointer != slowPointer) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }

    console.log(fastPointer);
    console.log("===");
    console.log(slowPointer);

    return fastPointer;
}

let a = new LinkedListNode('a');
let b = new LinkedListNode('b');
let c = new LinkedListNode('c');
let d = new LinkedListNode('d');
let e = new LinkedListNode('e');
let f = new LinkedListNode('f');
let j = new LinkedListNode('g');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = j;
j.next = d;

detectLoop(a);