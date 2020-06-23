const { BinarySearchTree } = require('./dataStructures');

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(12);
tree.insert(15);
tree.insert(20);
tree.insert(25);
tree.insert(8);
tree.insert(6);

function checkIfBallanced(node) {
    let depthsArray = new Array();
    depthTraverse(node, 1, depthsArray);

    let minLevel = Math.min(...depthsArray);
    let maxLevel = Math.max(...depthsArray);

    let result = (maxLevel - minLevel) <= 1

    return result;
}

function depthTraverse(node, level, array) {
    if (node.left == null && node.right == null) {
        array.push(level);
    }

    if (node.left) {
        depthTraverse(node.left, level + 1, array);
    }

    if (node.right) {
        depthTraverse(node.right, level + 1, array);
    }

    return array;
}

checkIfBallanced(tree.root);