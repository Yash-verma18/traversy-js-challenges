function anagramGrouping(arr) {
  const resultMap = new Map();

  for (const word of arr) {
    const key = word.split('').sort().join('');

    if (!resultMap.get(key)) {
      resultMap.set(key, [word]);
    } else {
      // First method of pushing to an array
      resultMap.get(key).push(word);

      // Second method of pushing to an array
      //   let currentValues = resultMap.get(key);
      //   currentValues.push(word);
      //   resultMap.set(key, currentValues);
    }
  }

  return Array.from(resultMap.values());
}

module.exports = anagramGrouping;
