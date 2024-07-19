function removeDuplicates(arr) {
  return (newSet = Array.from(new Set(arr)));
}

module.exports = removeDuplicates;
