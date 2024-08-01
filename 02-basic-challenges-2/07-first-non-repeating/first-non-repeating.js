// Without using any map or object.
// function findFirstNonRepeatingCharacter(str) {
//   for (let i = 0; i < str.length; i += 2) {
//     const currentCharacter = str[i];
//     const nextCharacter = str[i + 1];

//     if (currentCharacter != nextCharacter) {
//       return currentCharacter;
//     }
//   }

//   return null;
// }

function findFirstNonRepeatingCharacter(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    // This experession is also really really interesting
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] == 1) {
      return str[i];
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
