function isRotation(strOne, strTwo) {
    let combinedString = strOne + strOne;

    return combinedString.includes(strTwo);
}

console.log(isRotation('blara', 'rabka'));