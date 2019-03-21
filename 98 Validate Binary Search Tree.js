/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 68ms faster than ~93.57% and 37.1MB less than ~90.91%
const isValidBST = root => {
  const validateBranch = (node, min, max) => {
    if (node === null) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      validateBranch(node.left, min, node.val) &&
      validateBranch(node.right, node.val, max)
    );
  };

  return validateBranch(root, -Infinity, Infinity);
};
