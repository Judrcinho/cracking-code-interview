function stringCompression(str) {
    let newStr = '';

    for (i = 0; i < str.length; i++) {
        let charCount = 1;
        
        while(i < str.length - 1 && str[i] == str[i + 1]) {
            charCount++;
            i++;
        }

        newStr += str[i] + charCount.toString();
    }

    return newStr;
}

console.log(stringCompression('aabbbccdc'));