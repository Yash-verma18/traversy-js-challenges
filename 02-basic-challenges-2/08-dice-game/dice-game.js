function diceGameSimulation(numOfSimulation) {
  let results = [];
  const diceRoll = () => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    return { dice1, dice2, sum };
  };

  for (let i = 0; i < numOfSimulation; i++) {
    let currentResult = diceRoll();
    if (currentResult.sum == 7 || currentResult.sum == 11) {
      currentResult.result = 'win';
    } else if (
      currentResult.sum === 2 ||
      currentResult.sum === 3 ||
      currentResult.sum === 12
    ) {
      currentResult.result = 'lose';
    } else {
      currentResult.result = 'roll again';
    }
    results.push(currentResult);
  }

  return results;
}

module.exports = diceGameSimulation;
