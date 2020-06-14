function isPalindromePremutation(str) {
    let strLowerCase = str.toLowerCase();
    let strMap = new Map();

    [...strLowerCase].forEach(char => {
        if (strMap.has(char)) {
            strMap.set(char, strMap.get(char) + 1);
        } else {
            strMap.set(char, 1);
        }
    });

    let singleCharCount = 0;

    for (let [key, val] of strMap) {
        if (val % 2 != 0 && key != ' ') {
            singleCharCount++;

            if (singleCharCount > 1)
                return false;
        }
    }

    return true;
}

console.log(isPalindromePremutation('Tact Co   a'));