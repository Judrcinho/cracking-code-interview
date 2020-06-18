const {LinkedList, LinkedListNode} = require('./LinkedList');

function isPolindrome(headNode) {
    let headNodeCopy = headNode;
    let nextNode = new LinkedListNode(headNode.data);
    headNode = headNode.next;
    
    while (headNode) {
        var currentNode = new LinkedListNode(headNode.data);
        currentNode.next = nextNode;
        nextNode = currentNode;
        headNode = headNode.next;
    }

    while (currentNode) {
        if(currentNode.data != headNodeCopy.data) {
            return false;
        }

        currentNode = currentNode.next;
        headNodeCopy = headNodeCopy.next;
    }

    return true;
}

function reverseLinkedList(node) {
    let head = 0;

    while (node != null) {
        let currentNode = new LinkedListNode(node.data);
        currentNode.next = head;
        head = currentNode;
        node = node.next;
    }

    while (head) {
        console.log(head.data);
        head = head.next;
    }
}

function isPolindromeHalfRunner(head) {
    let fastPointer = head;
    let slowPointer = head;
    let stack = new Array();

    while (fastPointer != null && fastPointer.next != null) {
        stack.push(slowPointer.data);

        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    if (fastPointer != null) {
        slowPointer = slowPointer.next;
    }

    while (slowPointer) {
        if (slowPointer.data != stack.pop())
            return false;
        slowPointer = slowPointer.next;
    }

    return true;
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(4);
linkedList.add(1);
linkedList.add(1);

console.log(isPolindromeHalfRunner(linkedList.head));