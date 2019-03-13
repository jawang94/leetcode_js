// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums === null || nums.length < 2) return false;

  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) return true;
    else myMap.set(nums[i]);
  }

  return false;
};

// terribly inefficient
var containsDuplicate = function(nums) {
  let arr = nums;

  while (arr.length > 1) {
    let e = nums.shift();
    if (arr.indexOf(e) > -1) return true;
  }

  return false;
};

// slightly less terrible, still very terrible
var containsDuplicate = function(nums) {
  let queue = [];

  for (var i = 0; i < nums.length; i++) {
    if (queue.indexOf(nums[i]) > -1) return true;
    queue.push(nums[i]);
  }

  return false;
};
