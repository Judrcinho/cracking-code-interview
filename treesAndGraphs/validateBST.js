const { BinarySearchTree } = require('./dataStructures');

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(4);

tree.root.left.value = 100;

function validateBST(node) {
    let array = new Array();
    inorderTraversal(node, array);
    
    let currentNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        if (currentNumber > array[i]) {
            return false;
        }
        
        currentNumber = array[i];
    }

    return true;
} 

function inorderTraversal(node, array) {
    if (node == null) 
        return;
    
    inorderTraversal(node.left, array);
    array.push(node.value);
    inorderTraversal(node.right, array);
}

validateBST(tree.root);