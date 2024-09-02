const HashTable = require('./HashTable');

function wordInstanceCounter(input, word) {
  const myHashTable = new HashTable();

  const purifyInput = input
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(' ');

  for (let i = 0; i < purifyInput.length; i++) {
    if (myHashTable.has(purifyInput[i])) {
      myHashTable.set(purifyInput[i], myHashTable.get(purifyInput[i]) + 1);
    } else {
      myHashTable.set(purifyInput[i], 1);
    }
  }

  return myHashTable.get(word);
}

module.exports = wordInstanceCounter;
