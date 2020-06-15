class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

exports.LinkedList = class LinkedList {
    constructor() {
        this.head = null;
    }

    add(element) {
        let newNode = new LinkedListNode(element);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let element = this.head;
            
            while (element.next != null) {
                element = element.next;
            }

            element.next = newNode;
        }
    }

    print() {
        let head = this.head;

        while (head != null) {
            console.log(head.data);
            head = head.next;
        }
    }
}

exports.LinkedListNode = LinkedListNode;
