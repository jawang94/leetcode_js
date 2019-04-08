// Shuffle a set of numbers without duplicates.

// Example:

// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

/**
 * @param {number[]} nums
 */
// First solution. 260ms faster than ~75.41% and 62.3mb LESS THAN ~9.09%. Need to refactor for better space complexity.
var Solution = function(nums) {
  this.original = nums;
  this.shuffled = [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.shuffled = [];
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let oLen = this.original.length;

  while (this.shuffled.length < oLen) {
    let i = Math.floor(Math.random() * oLen);
    if (this.shuffled.indexOf(this.original[i]) < 0)
      this.shuffled.push(this.original[i]);
  }

  return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
