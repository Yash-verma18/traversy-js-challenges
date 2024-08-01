function validAnagrams(str1, str2) {
  const str1Map = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const str2Map = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return (
    Object.keys(str1Map).every((char) => str1Map[char] === str2Map[char]) &&
    Object.keys(str2Map).every((char) => str1Map[char] === str2Map[char])
  );
}

module.exports = validAnagrams;
