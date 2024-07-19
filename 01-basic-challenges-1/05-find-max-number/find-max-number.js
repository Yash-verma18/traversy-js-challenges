function findMaxNumber(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
    }
  }

  return temp;
}

module.exports = findMaxNumber;
