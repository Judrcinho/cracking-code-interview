function urlify(str) {
 return str.replace(/ /g, '%20');
}

console.log(urlify('some random test'));
