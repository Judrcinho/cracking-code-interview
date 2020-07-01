let context;
let rowsNumber = 3;
let columnsNumber = 5;
let tiles = [];

for (let c = 0; c < columnsNumber; c++) {
    tiles[c] = [];
    for (let r = 0; r < rowsNumber; r++) {
        let tile = {x: c*(50 + 3), y: r*(50 + 3), state: 'x'}
        tiles[c][r] = tile;
    }
}

tiles[0][0].state = 's';

function init() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
}

function drawSquare(x, y, state) {
    switch (state) {
        case 'x':
           context.fillStyle ='#FFAA00';
           break;
        default:
            context.fillStyle='#FF0000';
    }

    context.beginPath();
    context.rect(x, y, 50, 50);
    context.closePath();
    context.fill();
}

function drawGrid() {
    for (let c = 0; c < columnsNumber; c++) {
        for (let r = 0; r < rowsNumber; r++) {
            drawSquare(tiles[c][r].x, tiles[c][r].y, tiles[c][r].state);
        }
    }
}

init();
setInterval(() => {
    drawGrid();
}, 10);

console.log(tiles);