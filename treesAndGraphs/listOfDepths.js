const { BinarySearchTree } = require('./dataStructures');
const { LinkedList } = require('../linkedLists/LinkedList');

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(12);
tree.insert(8);
tree.insert(6);

tree.inorder(tree.root);

function getDepthList(rootNode) {
    let map = new Map();
    let level = 1;
    
    map = addValueToDepthMap(rootNode, map, level);

    let outputList = new Array();

    for ([key, value] of map) {
        outputList.push(value);
    }

    return outputList;
}

function addValueToDepthMap(node, map, level) {
    if (node == null)
        return;
    
    if (map.get(level)) {
        let linkedList = map.get(level);
        linkedList.add(node.value);
        map.set(level, linkedList);
    } else {
        let linkedList = new LinkedList();
        linkedList.add(node.value);
        map.set(level, linkedList);
    }

    addValueToDepthMap(node.left, map, level + 1);
    addValueToDepthMap(node.right, map, level + 1);

    return map;    
}

let result = getDepthList(tree.root);
console.log(result);
