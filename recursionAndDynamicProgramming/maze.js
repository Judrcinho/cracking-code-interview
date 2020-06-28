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

let maze = new Array(5).fill(0).map(() => new Array(6).fill(0));
maze[2][5] = 1;
maze[2][3] = 1;
maze[4][3] = 1;
maze[2][2] = 1;
maze[3][3] = 1;
maze[2][4] = 1;

let mazeVisited = new Array(5).fill(0).map(() => new Array(6).fill(0));

let path = new Array();
getPath(maze, mazeVisited, maze.length - 1, maze[0].length - 1, path);

console.log(maze);
console.log("");
console.log(path);