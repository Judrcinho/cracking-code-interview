// if only down and right moves allowed
function getPath(maze, mazeVisited, row, column, path) {
    if (row < 0 || column < 0 || maze[row][column] === 1 || mazeVisited[row][column] === 1)
        return false;

    let isOrigin = row === 0 && column === 0;

    console.log(row, column);

    if( isOrigin || 
        getPath(maze, mazeVisited, row - 1, column, path) || 
        getPath(maze, mazeVisited, row, column - 1, path)) 
    {
        console.log('here we go');
        mazeVisited[row][column] = 1;
        path.push([row, column]);
        return true;
    }

    return false;
}

// if all 4 moves are allowed
function MazeSolver(maze) {

    this.maze = maze;

    this.traverse = function(column, row) {
        if(this.maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(this.maze[column][row] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            this.maze[column][row] = 9;
            if(column < this.maze.length - 1) {
                this.traverse(column + 1, row);
            }
            if(row < this.maze[column].length - 1) {
                this.traverse(column, row + 1);
            }
            if(column > 0) {
                this.traverse(column - 1, row);
            }
            if(row > 0) {
                this.traverse(column, row - 1);
            }
        }
    };

};


let maze = new Array(5).fill(1).map(() => new Array(6).fill(1));
maze[2][5] = 0;
maze[2][3] = 0;
maze[4][3] = 0;
maze[2][2] = 0;
maze[3][3] = 0;
maze[4][5] = 2;

console.log(maze);

/*let mazeSolver = new MazeSolver(maze);
mazeSolver.traverse(0, 0);

let mazeVisited = new Array(5).fill(0).map(() => new Array(6).fill(0));

let path = new Array();
getPath(maze, mazeVisited, maze.length - 1, maze[0].length - 1, path);

console.log(maze);
console.log("");
console.log(path);*/