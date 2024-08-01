function validatePassword(str) {
  const passWordArr = str.split('');
  const minimumLength = str.length >= 8;
  const atleastOneCharUpperCase = passWordArr.some((char) => {
    return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
  });

  const atleastOneCharLowerCase = passWordArr.some((char) => {
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
  });

  const atleastOneDigit = passWordArr.some((char) => {
    return char >= 0 && char <= 9;
  });

  //   console.log({
  //     minimumLength,
  //     atleastOneCharUpperCase,
  //     atleastOneCharLowerCase,
  //     atleastOneDigit,
  //   });

  return (
    minimumLength &&
    atleastOneCharUpperCase &&
    atleastOneCharLowerCase &&
    atleastOneDigit
  );
}
module.exports = validatePassword;
