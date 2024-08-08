function sumUpTo(num) {
  // Base Case
  if (num === 1) {
    return 1;
  }

  return num + sumUpTo(num - 1);
}

module.exports = sumUpTo;
