function getNumberOfWays(n, stairsAccessMap) {
    if (n < 0) {
        return 0;
    }

    if (!stairsAccessMap.has(n)) {
        stairsAccessMap.set(n, 
            getNumberOfWays(n - 1, stairsAccessMap) + 
            getNumberOfWays(n - 2, stairsAccessMap) + 
            getNumberOfWays(n - 3, stairsAccessMap))
    }

    return stairsAccessMap.get(n);
}

function calcFibonacci(n, cash) {
    if (!cash.has(n)) {
        cash.set(n, calcFibonacci(n - 1, cash) + calcFibonacci(n - 2, cash));
    }

    return cash.get(n);
}

let stairsAccessMap = new Map();
stairsAccessMap.set(0, 1);

const output = getNumberOfWays(10, stairsAccessMap);
console.log(output);