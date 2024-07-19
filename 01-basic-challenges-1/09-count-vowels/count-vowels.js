function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const myArr = str.toLowerCase().split('');
  let counter = 0;

  for (let i = 0; i < myArr.length; i++) {
    if (vowels.includes(myArr[i])) {
      counter++;
    }
  }
  return counter;
}

module.exports = countVowels;
