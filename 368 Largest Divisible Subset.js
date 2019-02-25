// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

// Si % Sj = 0 or Sj % Si = 0.

// If there are multiple solutions, return any subset is fine.

// Example 1:

// Input: [1,2,3]
// Output: [1,2] (of course, [1,3] will also be ok)
// Example 2:

// Input: [1,2,4,8]
// Output: [1,2,4,8]

// 88ms Faster than 93.33% of solutions. Memory inefficient at 35.7MB, less than 12.50%...
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (nums.length === 0) return [];

  nums.sort(function(a, b) {
    return a - b;
  });

  let ans = [];

  let pre = [];

  for (var i = 0, len = nums.length; i < len; i++) {
    ans[i] = 1;
    pre[i] = i;

    for (var j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && ans[j] + 1 > ans[i]) {
        ans[i] = ans[j] + 1;
        pre[i] = j;
      }
    }
  }

  let maxn = 0;
  let maxnId;

  for (i = 0; i < len; i++) {
    if (ans[i] > maxn) {
      maxn = ans[i];
      maxnId = i;
    }
  }

  let result = [];

  while (true) {
    if (maxnId === pre[maxnId]) {
      result.push(nums[maxnId]);
      break;
    }

    result.push(nums[maxnId]);
    maxnId = pre[maxnId];
  }

  return result;
};

// var largestDivisibleSubset = function(nums, count = 0, max = []) {
//     if (nums.length <= 1) return max;
//     let subset = [];
//     let maxSubset = max;
//     let status = false;

//     subset.push(nums[0]);

//     if (count === nums.length - 1) return maxSubset;
//     for (var i = 1; i < nums.length; i++) {
//         for (var j = 0; j < subset.length; j++) {
//             if (status = false) break;
//             if (nums[i] % subset[j] === 0 || subset[j] % nums[i] === 0) {
//                 if (subset.indexOf(nums[i]) > -1) {
//                     status = false;
//                 }
//                 else status = true;
//             } else {
//                 status = false;
//                 break;
//             }
//         }
//         if (status === true) subset.push(nums[i]);
//     }
//     if (subset.length > maxSubset.length) maxSubset = subset;

//     let temp = nums[0];
//     nums.shift();
//     nums.push(temp);

//     return largestDivisibleSubset(nums, count + 1, maxSubset);
// };
