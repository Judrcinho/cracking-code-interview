//additional data structure
function isUnique(str) {
    let strArray = [];

    for (element of [...str]) {
        if (!strArray.includes(element)) {
            strArray.push(element);
        }
        else {
            return false;
        } 
    }

    return true;
}

//no additional data structure
function isUniqeNoAdditionalDataStructure(str) {
    for (i = 0; i < str.length - 1; i++) {
        for (j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }            
        }
    }

    return true;
}

console.log(isUnique('abacdef'));
console.log(isUniqeNoAdditionalDataStructure('abcadef'));