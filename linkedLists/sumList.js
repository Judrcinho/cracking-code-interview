const {LinkedList, LinkedListNode} = require('./LinkedList');

let firstList = new LinkedList();
firstList.add(1);
firstList.add(2);
firstList.add(3);

let secondList = new LinkedList()
secondList.add(4);
secondList.add(5);
secondList.add(6);

function addTwoNumbersReverse(firstList, secondList) {
    let firstListNode = firstList.head;
    let secondListNode = secondList.head;

    let outputList = new LinkedList();
    let remainder = 0;

    while (firstListNode && secondListNode) {
        let newValue = firstListNode.data + secondListNode.data + remainder;
        remainder = Math.floor(newValue / 10);
        outputList.add(newValue % 10);

        firstListNode = firstListNode.next;
        secondListNode = secondListNode.next;
    }

    while (firstListNode) {
        let newValue = firstListNode.data + remainder;
        remainder = Math.floor(newValue / 10);
        outputList.add(newValue % 10);

        firstListNode = firstListNode.next;
    }

    while (secondListNode) {
        let newValue = secondListNode.data + remainder;
        remainder = Math.floor(newValue / 10);
        outputList.add(newValue % 10);

        secondListNode = secondListNode.next;
    }

    return outputList;
}

function addTwoNumbersReverseRecursion(firstNode, secondNode, reminder = 0) {
    if (firstNode == null && secondNode == null && reminder === 0) {
        return null;
    }

    let result = new LinkedListNode();
    let currentValue = reminder;

    if (firstNode) {
        currentValue += firstNode.data;
    }

    if (secondNode) {
        currentValue += secondNode.data;
    }

    reminder = Math.floor(currentValue / 10);
    result.data = currentValue % 10;

    if (firstNode || secondNode || reminder) {
        result.next = addTwoNumbersReverseRecursion(firstNode ? firstNode.next : null, secondNode ? secondNode.next : null, reminder);
    }

    return result;
}

//to mimic stack or queue behaviour with javascript we can use 
//.push() - push to the end; .pop() - take from the end; .shift() - get from the beginning
function addTwoNumbersStraighOrder(firstNode, secondNode) {
    let firstListStack = new Array();
    let secondListStack = new Array();

    while (firstNode) {
        firstListStack.push(firstNode.data);
        firstNode = firstNode.next;
    }

    while (secondNode) {
        secondListStack.push(secondNode.data);
        secondNode = secondNode.next;
    }

    let longestSize = firstListStack.length > secondListStack.length ? firstListStack.length : secondListStack.length;
    let reminder = 0;
    let resultArray = new Array();

    for (i = 0; i < longestSize; i++) {
        let firstNumber = firstListStack.length > 0 ? firstListStack.shift() : 0;
        let secondNumber = secondListStack.length > 0 ? secondListStack.shift() : 0; 
        let sum = firstNumber + secondNumber + reminder;
        reminder = Math.floor(sum/10);
        resultArray.push(sum % 10);
    }

    let result = new LinkedList();

    for (item of resultArray) {
        result.add(item);
    }

    return result;
}

let answer = addTwoNumbersStraighOrder(firstList.head, secondList.head);
answer.print();

