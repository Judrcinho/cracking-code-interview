function oneAway(strOne, strTwo) {
    let longStr, shortStr = '';

    if (strOne.length > strTwo.length) {
        longStr = strOne;
        shortStr = strTwo;
    } else {
        longStr = strTwo;
        shortStr = strOne;
    }

    switch(longStr.length - shortStr.length) {
        case 0:
            var changesCount = 0;
            for (i = 0; i < longStr.length; i++) {
                if (shortStr[i] != longStr[i]){
                    changesCount++;

                    if (changesCount > 1)
                        return false;
                }        
            }
            break;
        case 1:
            let shortStrPointer = 0;
            var changesCount = 0;

            for (i = 0; i < longStr.length; i++) {
                if (shortStr[shortStrPointer] != longStr[i]){
                    i++;
                    changesCount++;

                    if (changesCount > 1)
                        return false;
                }
        
                shortStrPointer++;
            }

            break;
        default:
            return false;
    }    

    return true;
}

console.log(oneAway('pule', 'pele'));