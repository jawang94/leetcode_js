// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// http://fisherlei.blogspot.com/2015/10/leetcode-product-of-array-except-self.html
var productExceptSelf = function(nums) {
  var len = nums.length;
  var output = Array(len).fill(1);
  var left = 1;
  var right = 1;

  for (var i = 0; i < len - 1; i++) {
    left *= nums[i];
    right *= nums[len - i - 1];
    output[i + 1] *= left;
    output[len - i - 2] *= right;
  }

  return output;
};

// Ratchet solution using division in ~108ms
var productExceptSelf = function(nums) {
  let result = [];
  let product = 1;
  let hasZero = false;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      product = 0;
      hasZero = true;
      break;
    } else {
      product *= nums[i];
    }
  }
  nums.forEach(e => {
    if (e != 0 && hasZero) {
      result.push(0);
    } else if (e != 0 && !hasZero) {
      result.push(product / e);
    } else {
      let temp = 1;
      let count = 0;
      nums.forEach(ex => {
        if (ex != 0) {
          temp *= ex;
        } else {
          count++;
        }
      });
      if (count > 1) {
        temp = 0;
      }
      result.push(temp);
    }
  });
  return result;
};
