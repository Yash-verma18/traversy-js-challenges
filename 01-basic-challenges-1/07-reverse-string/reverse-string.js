function reverseString(str) {
  let reverse = '';
  for (let i = str.length - 1; i > -1; i--) {
    reverse += str[i];
  }
  return reverse;
}

module.exports = reverseString;
