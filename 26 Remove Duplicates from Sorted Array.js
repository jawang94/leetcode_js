// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1, 72ms faster than ~93.45% & memory 36.8mb less than 89.3%
var removeDuplicates = function(nums) {
  if (nums.length === 0) return nums;

  for (var i = 1, j = 0; i < nums.length; i++) {
    if (nums[i] != nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
};
