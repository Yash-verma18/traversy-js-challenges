function areAllCharactersUnique(str) {
  let myMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i])) {
      return false;
    } else {
      myMap.set(str[i], 1);
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
