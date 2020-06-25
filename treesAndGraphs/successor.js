const { BinarySearchTree, Node } = require('./dataStructures');
const { LinkedList } = require('../linkedLists/LinkedList');

function findSuccessor(rootNode, value) {
    let inorderList = new LinkedList();
    getInorderList(rootNode, inorderList);
    inorderList.print();   
    
    let headNode = inorderList.head;

    while (headNode != null) {
        if (headNode.data.value === value) {
            return headNode.next;
        }

        headNode = headNode.next;
    }

    return null;
}

function getInorderList(node, list) {
    if (node == null) {
        return null;
    }

    getInorderList(node.left, list);
    list.add(node);
    getInorderList(node.right, list);
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(12);
tree.insert(8);
tree.insert(6);

const nextSuccessor = findSuccessor(tree.root, 4);
console.log(nextSuccessor);

