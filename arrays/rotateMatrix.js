function rotateMatrix(matrix) {
    console.log('initial array:');
    console.log(matrix);
    let newMatrix = new Array(matrix.length).fill(0).map(x => new Array(matrix.length).fill(0));

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix.length; j++) {
            newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }
    console.log('output array:');
    console.log(newMatrix);
}

function swapZerosByLayers(matrix) {
    console.log(matrix);
    let n = matrix.length;

    for (layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - layer - 1;

        for (i = first; i < last; i++) {
            let offset = i - first;
            let tmp = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last-offset];
            matrix[last][last-offset] = matrix[i][last];
            matrix[i][last] = tmp;
        }
    }

    console.log(matrix);

}

swapZerosByLayers([[1, 2, 3, 4], [5, 6, 7, 2], [9, 1, 2, 3], [4, 5, 6, 7]]);