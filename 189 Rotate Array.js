/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

Array.prototype.reverseFromLToR = function(left, right) {
  if (right >= this.length) {
    return;
  }

  while (left < right) {
    var temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }
};
var rotate = function(nums, k) {
  k = k % nums.length;

  nums.reverse();
  nums.reverseFromLToR(0, k - 1);
  nums.reverseFromLToR(k, nums.length - 1);
};

// Concise solution 96ms faster than ~54.31% & space 35.3mb less than ~45%
var rotate = function(nums, k) {
  while (k > 0) {
    let temp = nums.pop();
    nums.unshift(temp);
    k--;
  }
};
