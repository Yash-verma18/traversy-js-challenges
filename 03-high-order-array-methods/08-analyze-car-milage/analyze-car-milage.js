function analyzeCarMileage(cars) {
  let highestMileageCar = cars[0];
  let lowestMileageCar = cars[0];

  const totalMileage = cars.reduce((totalMileage, car) => {
    if (highestMileageCar.mileage < car.mileage) {
      highestMileageCar = car;
    }
    if (lowestMileageCar.mileage > car.mileage) {
      lowestMileageCar = car;
    }

    return car.mileage + totalMileage;
  }, 0);

  const averageMileage = totalMileage / cars.length;

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
