const { Queue } = require('../stackAndQueue/dataStructures');

class Tree {
    constructor(value) {
        this.value = value;
        this.children = new Array();
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    } 
}

class BinarySearchTree {
    constructor() {k
        this.root = null;
    }

    insert(data) {
        if (this.root == null) {
            let node = new Node(data);
            this.root = node;
        } else {
            this.insertNode(this.root, data);
        }
    }

    findMinimumNode(node) {
        if (node == null) {
            return null;
        }

        if (node.left == null) {
            return node;
        } else {
            return this.findMinimumNode(node.left);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node.value > data) {
            node.left = this.removeNode(node.left, data);
            return node;

        } else if (node.value < data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            } else if (node.left != null && node.right == null) {
                node = node.left;
                return node;
            } else if (node.right != null && node.left == null) {
                node = node.right;
                return node;
            } else {
                let minNode = this.findMinimumNode(node.right);
                node.value = minNode.value;
                node.right = this.removeNode(minNode);
                return node;
            }
        }
    }

    insertNode(root, data) {
        if (root.value > data) {
            if (root.left == null) {
                let newNode = new Node(data);
                root.left = newNode;
            } else {
                this.insertNode(root.left, data);
            }
        } else {
            if (root.right == null) {
                let newNode = new Node(data);
                root.right = newNode;
            } else {
                this.insertNode(root.right, data);
            }
        }
    }

    // left branch, node, right branch
    inorder(node) {
        if (node == null) {
            return;
        }

        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    // current node, then left branch and right node
    preorder(node) {
        if (node == null) {
            return;
        }

        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    // 
    postorder(node) {
        if (node == null) {
            return;
        }

        this.postorder(node.right);
        console.log(node.value);
        this.postorder(node.left);

    }
}

class Graph {
    constructor(numberOfVertices) {
        this.numberOfVertices = numberOfVertices;
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, new Array());
    }

    addEdge(vertexFrom, vertexTo) {
        this.adjacencyList.get(vertexFrom).push(vertexTo);            
    }

    depthFirstTraversal(startingNode) {
        let visitMap = [];
        let keys = this.adjacencyList.keys();

        for (let key of keys) {
            visitMap[key] = false;
        }

        this.depthTraversal(startingNode, visitMap);
    }

    depthTraversal(node, visitMap) {
        visitMap[node] = true;
        console.log(node);
        let neighbours = this.adjacencyList.get(node);

        for (let neighbour of neighbours) {
            if (!visitMap[neighbour]) {
                this.depthTraversal(neighbour, visitMap);
            }
        }
    }

    breadthFirstTraversal(node) {
        let nodesQueue = new Queue();
        nodesQueue.push(node);

        let visitMap = new Map();

        for (vertex in this.adjacencyList.keys()) {
            visitMap.set(vertex, false);
        }

        visitMap.set(node, true);

        while (!nodesQueue.isEmpty) {
            let currentNode = nodesQueue.remove();
            console.log(currentNode);
            let connectedNodes = this.adjacencyList.get(currentNode);

            for (let neighbour of connectedNodes) {
                if (!visitMap.get(neighbour)) {
                    visitMap.set(neighbour, true);
                    nodesQueue.push(neighbour);
                }
            }
        }
    }
}

module.export = { Tree, BinarySearchTree, Graph }

let graph = new Graph(5);
let vertexes = ['A', 'B', 'C', 'D', 'E'];

for (vertex of vertexes) {
    graph.addVertex(vertex);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('B', 'E');
graph.addEdge('E', 'A');

console.log(graph.adjacencyList);

graph.depthFirstTraversal('A');
graph.breadthFirstTraversal('A');