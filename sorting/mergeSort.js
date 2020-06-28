function mergeSort(arr) {
    if (arr.length === 1)
        return arr;

    let middleIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex);

    return mergeArrays(mergeSort(left), mergeSort(right));
}

function mergeArrays(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift());            
        } else {
            result.push(left.shift());
        }
    }

    return [...result, ...left, ...right];
}

let array = [1, 7, 10, 2, 4, 8, 15, 20, 19];

console.log(mergeSort(array));