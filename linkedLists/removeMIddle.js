const {LinkedList} = require('./LinkedList');

function removeMiddle(linkedList) {
    linkedList.print();
    console.log();
    let slowPointer = linkedList.head;
    let fastPointer = slowPointer.next;
    let previousNode = null;

    while (fastPointer) {
        if(fastPointer.next) {
            fastPointer = fastPointer.next.next;
            if (!fastPointer) {
                previousNode.next = slowPointer.next;
                break;
            }
        } else {
            previousNode.next = slowPointer.next;
            break;
        }

        previousNode = slowPointer;
        slowPointer = slowPointer.next;
    }

    linkedList.print();
}


let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(12);
linkedList.add(13);
linkedList.add(20);
linkedList.add(10);
linkedList.add(11);
linkedList.add(5);

removeMiddle(linkedList);
