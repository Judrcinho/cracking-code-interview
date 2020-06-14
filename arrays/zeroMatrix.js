function swapZeros(matrix) {
    console.log(matrix);

    let zeroRows = new Set();
    let zeroColumns = new Set();

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroColumns.add(j);
            }
        }
    }   

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++) {
            if (zeroRows.has(i) || zeroColumns.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    console.log(matrix);
}

swapZeros([[1, 0, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]]);