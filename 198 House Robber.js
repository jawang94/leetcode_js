// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Credits:
// Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

// Hide Company Tags LinkedIn Airbnb
// Show Tags
// Show Similar Problems

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums === null) {
    return nums;
  }

  var even = 0;
  var odd = 0;

  for (var i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even = Math.max(even + nums[i], odd);
    } else {
      odd = Math.max(odd + nums[i], even);
    }
  }

  return Math.max(even, odd);
};

// 56ms faster than ~95.41% & 33.8MB less than ~25.89%. Could refactor to use less space.
var rob = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  let prev1 = 0;
  let prev2 = 0;

  for (let i = 0; i < n; i++) {
    let temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }

  return prev1;
};
