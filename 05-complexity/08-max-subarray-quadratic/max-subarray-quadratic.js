function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSubArrSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSubArrSum += arr[j];
    }

    maxSum = Math.max(maxSum, currentSubArrSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
