function countOccurrences(str, char) {
  let occurence = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      occurence++;
    }
  }

  return occurence;
}

module.exports = countOccurrences;
