const { BinarySearchTree, Node } = require('./dataStructures');

function buildTreeFromArray(array) {
    let binaryTree = new BinarySearchTree();   
    return buildTree(binaryTree.root, array); 
}

function buildTree(root, array) {
    if(array.length == 0) 
        return null;

    if(array.length == 1)
        return new Node(array[0]);

    let arrayMiddleIndex = Math.floor(array.length / 2);

    let leftPart = array.slice(0, arrayMiddleIndex);
    let rightPart = array.slice(arrayMiddleIndex + 1, array.length);

    root = new Node(array[arrayMiddleIndex]);
    root.left = buildTree(root, leftPart);
    root.right = buildTree(root, rightPart);

    return root;    
}

function inorder(node) {
    if (node == null) {
        return;
    }

    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
};

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
let tree = buildTreeFromArray(inputArray)
inorder(tree);




