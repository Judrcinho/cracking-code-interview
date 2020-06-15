const {LinkedList} = require('./LinkedList');

function returnKthLast(linkedList, k) {
    let slowPointer = linkedList.head;
    let fastPointer = slowPointer.next;
    let fastJumpsCounter = 1;
    let halfJump = true;

    while (slowPointer != null && fastPointer !=null) {
        slowPointer = slowPointer.next;

        if (fastPointer.next) {
            fastPointer = fastPointer.next.next;
        } else {
            halfJump = false;
            fastPointer = fastPointer.next;
        }

        fastJumpsCounter++;
    }

    let nodesCount = halfJump ? fastJumpsCounter * 2 - 1 : fastJumpsCounter * 2 - 2;
    let targetIndex = nodesCount - k;

    if (targetIndex < nodesCount / 2) {
        let counter = 1;
        let head = linkedList.head;

        while(counter != targetIndex) {
            head = head.next;
            counter++;
        }

        return head.data;
    } else {
        let counter = Math.ceil(nodesCount / 2);
        let head = slowPointer;

        while(counter != targetIndex) {
            head = head.next;
            counter++;
        }

        return head.data;

    }
}

function getKthElementSecondOption(linkedList, k) {
    let p1 = linkedList.head;
    let p2 = linkedList.head;

    for (i = 0; i < k; i++) {
        p1 = p1.next;
    }

    while (p1 != null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2.data;
}

let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(15);
linkedList.add(50);
linkedList.add(20);
linkedList.add(5);
linkedList.add(15);

console.log(getKthElementSecondOption(linkedList, 6));