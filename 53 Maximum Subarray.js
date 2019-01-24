/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var sum = 0;
  var maxSum = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);

    if (sum < 0) {
      sum = 0;
    }
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
