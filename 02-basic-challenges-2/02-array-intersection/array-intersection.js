function arrayIntersection(arr1, arr2) {
  var resultArr = [];
  for (let i = 0; i <= arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !resultArr.includes(arr1[i])) {
      resultArr.push(arr1[i]);
    }
  }
  return resultArr; // Intersection of an array
}

module.exports = arrayIntersection;
