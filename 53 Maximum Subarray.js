/**
 * @param {number[]} nums
 * @return {number}
 */
// 64ms faster than ~95.04% and space 35.7mb less than ~20%
var maxSubArray = function(nums) {
  const len = nums.length;
  let maxSum = -Infinity;
  let currentSum = 0;

  if (len < 2) return nums;

  for (let i = 0; i < len; i++) {
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
};

// Terrible n^2 solution
var maxSubArray = function(nums) {
  const n = nums.length;
  let max = nums[0];
  if (n === 2) {
    max = Math.max(max, nums[1], max + nums[1]);
    return max;
  }

  for (var i = 0; i < n; i++) {
    if (nums[i] > max) max = nums[i];
    let sum = nums[i];
    for (var j = i + 1; j < n; j++) {
      sum += nums[j];
      if (sum > max) max = sum;
    }
  }
  return max;
};
