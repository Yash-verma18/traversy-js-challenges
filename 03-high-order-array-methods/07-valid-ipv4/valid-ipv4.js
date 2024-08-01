function isValidIPv4(str) {
  const addressArr = str.split('.');
  if (addressArr.length != 4) {
    return false;
  }
  const isValid = addressArr.every((num) => {
    return num > -1 && num <= 255 && num.charAt(0) != 0;
  });

  return isValid;
}

module.exports = isValidIPv4;
