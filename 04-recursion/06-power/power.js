const power = (base, exponent) => {
  if (exponent == 1) {
    return base;
  }
  return power(base, exponent - 1) * base;
};

module.exports = power;
