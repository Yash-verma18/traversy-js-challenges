// 1st brute force approach
// function findMissingLetter(arr) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGIFJKLMNOPQRSTUVWXYZ';
//   const arrayAlpha = alphabet.split('');
//   const startingIndexChar = arrayAlpha.indexOf(arr[0]);
//   let j = 0;
//   for (let i = startingIndexChar; i < arrayAlpha.length; i++) {
//     if (arrayAlpha[i] != arr[j]) {
//       return arrayAlpha[i];
//     }
//     j++;
//   }
// }

// 2nd time improvement : less variable or dont need to create any array using split
// function findMissingLetter(arr) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGIFJKLMNOPQRSTUVWXYZ';
//   let startingIndexChar = alphabet.indexOf(arr[0]);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startingIndexChar]) {
//       return alphabet[startingIndexChar];
//     } else {
//       startingIndexChar++;
//     }
//   }
// }

// 3rd time improvement : Additionally we dont need to increment alphabet by ourselves
function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGIFJKLMNOPQRSTUVWXYZ';
  let startingIndexChar = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startingIndexChar + i]) {
      return alphabet[startingIndexChar + i];
    }
  }
}

module.exports = findMissingLetter;
