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
// Recursive approach 60ms faster than ~54.97% and 33.9MB less than ~14.96%
var preorderTraversal = function(root) {
  let result = [];

  const traverse = node => {
    if (node === null) return node;
    result.push(node.val);
    if (node.left != null) traverse(node.left);
    if (node.right != null) traverse(node.right);
  };

  traverse(root);
  return result;
};

// Iterative approach 56ms faster than 100% and 33.9MB less than ~14.96%
var preorderTraversal = function(root) {
  let result = [];
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    if (node === null) continue;
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};
