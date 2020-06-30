let canvas;
let ctx;

let WIDTH = 1200;
let HEIGHT = 800;

let tileW = 20;
let tileH = 20;

tileRowsCount = 10;
tileColumnCount = 15;

dragok = false;

boundX = 0;
boundY = 0;

var tiles = [];

for (let c = 0; c < tileColumnCount; c++) {
    tiles[c] = [];
    for (let r = 0; r < tileRowsCount; r++) {
        tiles[c][r] = { x: c*(tileW + 3), y: r*(tileH + 3), state: 'e' }
    }
}

tiles[0][0].state = 's';
tiles[tileColumnCount - 1][tileRowsCount - 1].state = 'f';

function rect(x, y, w, h, state) {
    if (state == 's') {
        ctx.fillStyle = '#00FF00';
    } else if (state == 'f') {
        ctx.fillStyle = '#FF0000';
    } else if (state == 'w') {
        ctx.fillStyle = '#0000FF';
    } else if (state == 'x') {
        ctx.fillStyle = '#00FFFF'
    }
     else {
        ctx.fillStyle = '#AAAAAA';
    }

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function unsetObstacles() {
    for (let c = 0; c < tileColumnCount; c++) {
        for (let r = 0; r < tileRowsCount; r++) {
            if (tiles[c][r].state == 'w') {
                tiles[c][r].state = 'e';
            }
        }
    }

    document.getElementById('info').innerHTML = ''
}

function solve() {
    let dotsQueue = [];
    let solutionFound = false;
    let currentX = 0;
    let currentY = 0;

    dotsQueue.push([0, 0]);

    while(dotsQueue.length > 0 && !solutionFound) {
        let currentPoint = dotsQueue.shift();
        currentX = currentPoint[0];
        currentY = currentPoint[1];

        if (currentY + 1 < tileRowsCount && tiles[currentX][currentY + 1].state == 'f') {
            solutionFound = true;
        }
        if (currentX + 1 < tileColumnCount && tiles[currentX + 1][currentY].state == 'f') {
            solutionFound = true;
        }
        if (currentY + 1 < tileRowsCount && tiles[currentX][currentY + 1].state == 'e') {
            dotsQueue.push([currentX, currentY + 1]);
            tiles[currentX][currentY + 1].state = tiles[currentX][currentY].state + 'l'; 
        }
        if (currentY - 1 > 0 && tiles[currentX][currentY - 1].state == 'e') {
            dotsQueue.push([currentX, currentY - 1]);
            tiles[currentX][currentY - 1].state = tiles[currentX][currentY].state + 'r'; 
        }
        if (currentX + 1 < tileColumnCount && tiles[currentX + 1][currentY].state == 'e') {
            dotsQueue.push([currentX + 1, currentY]);
            tiles[currentX + 1][currentY].state = tiles[currentX][currentY].state + 'u'; 
        }
        if (currentX - 1 > 0 && tiles[currentX - 1][currentY].state == 'e') {
            dotsQueue.push([currentX - 1, currentY]);
            tiles[currentX - 1][currentY].state = tiles[currentX][currentY].state + 'd'; 
        }
    }

    if (solutionFound) {
        document.getElementById('info').innerHTML = 'SOLUTION FOUND!'
        let path = tiles[currentX][currentY].state;
        let startX = 0;
        let startY = 0;

        for (let i = 1; i < path.length; i++) {
            let direction = path.charAt(i);

            if (direction == 'u') {
                startX += 1;
            } else if (direction == 'd') {
                startX -= 1;
            } else if (direction == 'r') {
                startY -= 1;
            } else if (direction == 'l') {
                startY +=1;
            }

            tiles[startX][startY].state = 'x';
        }

    } else {
        document.getElementById('info').innerHTML = 'SOLUTION NOT FOUND!'
    }
}

function draw() {
    clear();

    for (let c = 0; c < tileColumnCount; c++) {
        for (let r = 0; r < tileRowsCount; r++) {
            rect(tiles[c][r].x, tiles[c][r].y, tileW, tileH, tiles[c][r].state);
        }
    }

}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    return setInterval(draw, 10);
}

init();

function myMove(e) {
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;

    for (c = 0; c < tileColumnCount; c++) {
        for (r = 0; r < tileRowsCount; r++) {
            if (c*(tileW + 3) < x && x < c*(tileW+3)+tileW && r*(tileH + 3) < y && y < r*(tileH + 3) + tileH) {
                if (tiles[c][r].state === 'e' && (c != boundX || r != boundY)) {
                    tiles[c][r].state = 'w';
                    boundX = c;
                    boundY = r;
                } else if (tiles[c][r].state === 'w' && (c != boundX || r != boundY)) {
                    tiles[c][r].state = 'e';
                    boundX = c;
                    boundY = r;
                }
            }
        }
    }
}

function myDown(e) {
    canvas.onmousemove = myMove;

    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;

    for (c = 0; c < tileColumnCount; c++) {
        for (r = 0; r < tileRowsCount; r++) {
            if (c*(tileW + 3) < x && x < c*(tileW+3)+tileW && r*(tileH + 3) < y && y < r*(tileH + 3) + tileH) {
                if (tiles[c][r].state === 'e') {
                    tiles[c][r].state = 'w';
                    boundX = c;
                    boundY = r;
                } else if (tiles[c][r].state === 'w') {
                    tiles[c][r].state = 'e';
                    boundX = c;
                    boundY = r;
                }
            }
        }
    }
}

function myUp() {
    canvas.onmousemove = null;
}

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
