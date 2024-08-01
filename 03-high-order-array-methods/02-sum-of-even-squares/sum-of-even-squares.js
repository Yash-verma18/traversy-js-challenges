function sumOfEvenSquares(number) {
  const reduceResult = number.reduce((total, num) => {
    if (num % 2 == 0) {
      return total + num * num;
    } else {
      return total + 0;
    }
  }, 0);

  return reduceResult;
}

module.exports = sumOfEvenSquares;
