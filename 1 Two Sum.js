// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.

// Hide Company Tags LinkedIn Uber Airbnb Facebook Amazon Microsoft Apple Yahoo Dropbox Bloomberg Yelp Adobe
// Hide Tags Array Hash Table
// Hide Similar Problems (M) 3Sum (M) 4Sum (M) Two Sum II - Input array is sorted (E) Two Sum III - Data structure design

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Brute force O(N^2) time
// var twoSum = function(nums, target) {
//     if (nums.length < 1) return false;
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = 0; j < nums.length && j != i; j++) {
//             if (nums[i] + nums[j] === target) return (i < j ? [i, j] : [j, i]);
//         }
//     }
//     return false;
// };

// Optimized solution
var twoSum = function(nums, target) {
  let myHash = {};
  for (var i = 0; i < nums.length; i++) {
    let addend = target - nums[i];
    if (addend in myHash) return [myHash[addend], i];
    myHash[nums[i]] = i;
  }
  return false;
};

// Map possibly faster? Nope
// var twoSum = function(nums, target) {
//     let myMap = new Map();
//     for (var i = 0; i < nums.length; i++) {
//         let addend = target - nums[i];
//         if (myMap.has(addend)) return [myMap.get(addend), i];
//         myMap.set(nums[i], i);
//     }
//     return false;
// }
