function isPalindrome(str) {
  // Delete anything that is not a number or a letter
  let purifyString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseString = '';
  for (let i = purifyString.length - 1; i > -1; i--) {
    reverseString += purifyString[i];
  }
  return reverseString === purifyString;
}

module.exports = isPalindrome;
