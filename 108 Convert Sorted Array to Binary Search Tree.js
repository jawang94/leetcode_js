/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return generate(nums, 0, nums.length - 1);
};

var generate = function(nums, start, end) {
  if (start > end) {
    return null;
  }
  var midIndex = start + parseInt((end - start) / 2);
  var midVal = nums[midIndex];

  var node = new TreeNode(midVal);
  node.left = generate(nums, start, midIndex - 1);
  node.right = generate(nums, midIndex + 1, end);

  return node;
};

// 72ms faster than ~90.95% & 37.5MB less than ~81.25%
var sortedArrayToBST = function(nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
