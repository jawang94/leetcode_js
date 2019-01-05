/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  let result = [];
  helper(root, result);
  return result;
};

var helper = (root, result) => {
  if (root != null) {
    if (root.left != null) {
      helper(root.left, result);
    }
    result.push(root.val);
    if (root.right != null) {
      helper(root.right, result);
    }
  }
};
