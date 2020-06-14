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

rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 2], [9, 0, 4, 6], [1, 1, 1, 1]]);