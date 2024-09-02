function longestConsecutiveSequence(number) {
  const set = new Set();

  for (let i = 0; i < number.length; i++) {
    if (number.indexOf(number[i] + 1) > -1) {
      set.add(number[i]);
      set.add(number[i] + 1);
    }
  }
  return set.size;
}

module.exports = longestConsecutiveSequence;
