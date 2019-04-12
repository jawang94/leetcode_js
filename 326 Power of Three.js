// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
// 300ms faster than ~99.31% and 48MB less than ~43.94%. Could be better memory-wise.
var isPowerOfThree = function(n) {
  if (n === 0) return false;
  let clone = n;

  while (clone >= 3) {
    clone /= 3;
  }

  if (clone === 1) return true;
  return false;
};
