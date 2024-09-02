function symmetricDifference(arr1, arr2) {
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);

  const resArr = [];
  for (const num of arr1) {
    if (!arr2Set.has(num)) {
      resArr.push(num);
    }
  }
  for (const num of arr2) {
    if (!arr1Set.has(num)) {
      resArr.push(num);
    }
  }

  return resArr;
}
module.exports = symmetricDifference;
