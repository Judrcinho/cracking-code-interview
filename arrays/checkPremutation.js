function checkPremutation(strOne, strTwo) {
    let strOneMap = new Map();
    let strTwoMap = new Map();

    [...strOne].forEach(element => {
        if (!strOneMap.has(element)) {
            strOneMap.set(element, 1);
        } else {
            let currentCharCount = strOneMap.get(element);
            strOneMap.set(element, currentCharCount + 1);
        }
    });

    [...strTwo].forEach(element => {
        if (!strTwoMap.has(element)) {
            strTwoMap.set(element, 1);
        } else {
            let currentCharCount = strTwoMap.get(element);
            strTwoMap.set(element, currentCharCount + 1);
        }
    });

    if (strOneMap.size != strTwoMap.size){
        return false;
    }

    for ([key, val] of strOneMap) {
        if (strTwoMap.get(key) != val)
            return false;
    }

    return true;
}

console.log(checkPremutation('bacc', 'cafb'));