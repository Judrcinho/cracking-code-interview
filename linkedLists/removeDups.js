const {LinkedList} = require('./LinkedList');

//with additional data structure
function removeDups(linkedList) {    
    let listValues = new Array();
    let head = linkedList.head;

    while (head != null) {
        if (listValues.includes(head.data)) {
            previous.next = head.next;
        } else {
            listValues.push(head.data);
        }

        previous = head;
        head = head.next;
    }

    linkedList.print();
}

function removeDupsNoAdditionalDataStructute(linkedList) {
    let firstPointer = linkedList.head;

    while(firstPointer != null) {
        let previous = firstPointer;
        let secondPointer = firstPointer.next;

        while (secondPointer != null) {
            if (firstPointer.data == secondPointer.data) {
                previous.next = secondPointer.next;
            }

            previous = secondPointer;
            secondPointer = secondPointer.next;
        }

        firstPointer = firstPointer.next;
    }

    linkedList.print();

}

let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(10);
linkedList.add(15);
linkedList.add(20);
linkedList.add(5);
linkedList.add(15);

removeDupsNoAdditionalDataStructute(linkedList);