const HashTable = require('./HashTable');

function anagramGrouping(words) {
  const myAnagramGroup = new HashTable();
  for (const word of words) {
    let totalSum = 0;
    for (const char of word) {
      totalSum += char.charCodeAt();
    }
    if (myAnagramGroup.has(totalSum)) {
      // i dont have to use the set method here, cause the code takes the address of refference value, so when i push something in it. it litterally changes the map.
      let currentValue = myAnagramGroup.get(totalSum);
      currentValue.push(word);
    } else {
      myAnagramGroup.set(totalSum, [word]);
    }
  }
  return myAnagramGroup.getValues();
}

module.exports = anagramGrouping;
