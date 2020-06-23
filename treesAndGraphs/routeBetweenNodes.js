const { Graph } = require('./dataStructures');

function areNodesConnected(graph, firstVertex, secondVertex) {
    let nodeVisited = new Map();

    for (let key of graph.adjacencyList.keys()) {
        nodeVisited.set(key, false);
    }

    console.log(visitNode(graph, firstVertex, secondVertex, nodeVisited));
}

function visitNode(graph, currentNode, targetedNode, nodeVisited) {
    if (currentNode == targetedNode) {
        return true;
    }

    nodeVisited.set(currentNode, true);

    let neighbours = graph.adjacencyList.get(currentNode);

    for (let neighbour of neighbours) {
        if (!nodeVisited.get(neighbour)) {
            return visitNode(graph, neighbour, targetedNode, nodeVisited);
        }
    }

    return false;
}

let graph = new Graph(6);
let vertexes = ['A', 'B', 'C', 'D', 'E', 'F'];

vertexes.forEach(vertex => graph.addVertex(vertex));

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'F');
graph.addEdge('E', 'C');
graph.addEdge('D', 'B');

areNodesConnected(graph, 'A', 'F');