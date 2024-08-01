function generateHashtag(str) {
  if (str.trim() === '') {
    return false;
  }

  const words = str.trim().toLowerCase().split(' ');

  const joinedSring = words.reduce((acc, word) => {
    if (word[0]) {
      acc += word[0].toUpperCase() + word.slice(1);
    }

    return acc;
  }, '#');

  if (joinedSring.length > 140) {
    return false;
  }

  return joinedSring;
}

module.exports = generateHashtag;
