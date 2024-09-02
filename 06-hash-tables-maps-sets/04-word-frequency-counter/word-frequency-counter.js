function wordFrequencyCounter(str) {
  const arr = str
    .toLowerCase()
    .replace(/[^a-zA-z\s]/g, '')
    .split(' ');

  const newMap = new Map();
  if (str == '') {
    return newMap;
  }
  for (let word of arr) {
    if (!newMap.has(word)) {
      newMap.set(word, 1);
    } else {
      newMap.set(word, newMap.get(word) + 1);
    }
  }

  return newMap;
}

module.exports = wordFrequencyCounter;
