// Most optimal Approach
function highestScoringWord(str) {
  // an array of words
  const words = str.split(' ');

  const score = words.map((word) => {
    return Array.from(word).reduce((sum, letter) => {
      return (sum += letter.charCodeAt(0) - 96);
    }, 0);
  });

  //  max score of the array
  const highestScoreWord = Math.max(...score);
  const highestScoreIndex = score.indexOf(highestScoreWord);

  return words[highestScoreIndex];
}

// My first attempt was right but so long, have two functions to solve the problem
// function wordScore(word, scoreMap) {
//   const splittingWord = word.split('');

//   const finalScore = splittingWord.reduce((sum, char) => {
//     const scoreOfChar = scoreMap.get(char);
//     return scoreOfChar + sum;
//   }, 0);

//   return finalScore;
// }

// function highestScoringWord(str) {
//   let highestScoreWord = {};

//   const scoreMap = new Map();
//   const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   alphabetArr.forEach((char, index) => {
//     scoreMap.set(char, index + 1);
//   });

//   const wordArray = str.split(' ');

//   for (word of wordArray) {
//     const currentWordScore = wordScore(word, scoreMap);

//     if (!highestScoreWord.score) {
//       highestScoreWord = {
//         score: currentWordScore,
//         word: word,
//       };
//     } else if (highestScoreWord.score < currentWordScore) {
//       highestScoreWord.word = word;
//       highestScoreWord.score = currentWordScore;
//     }
//   }

//   return highestScoreWord.word;
// }

module.exports = highestScoringWord;
