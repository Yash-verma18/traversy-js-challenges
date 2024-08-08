function arraySum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  if (arr.length == 1) {
    return arr[0];
  }
  return arraySum(arr.splice(1)) + arr[0];
}

module.exports = arraySum;

// (arraySum([2, 3, 4, 5]) + arr[0] => (arraySum([2, 3, 4, 5]) + 1
// (arraySum([3, 4, 5]) + arr[0] => (arraySum([3, 4, 5]) + 2
// (arraySum([4, 5]) + arr[0] => (arraySum([4, 5]) + 3
// (arraySum([5]) + arr[0] => (arraySum([5]) + 4
// (arraySum([5]) => 5;

// unwinding

// (arraySum([5]) + 4 __ (arraySum([4, 5]) + 3 __ (arraySum([3, 4, 5]) + 2 __ (arraySum([2, 3, 4, 5]) + 1
// 5 + 4 = 9 __           9 + 3 = 12           __              12 + 2 = 14 __  14 + 1 = 15
