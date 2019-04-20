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
// Recursive approach 56ms faster than 100% and 33.9MB less than ~10.33%
var inorderTraversal = function(root) {
  let result = [];

  const traverse = node => {
    if (node === null) return node;
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(root);
  return result;
};
// Iterative approach in 56ms faster than 100% and 33.8MB less than ~32.06%
var inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let current = root;

  while (current != null) {
    stack.push(current);
    current = current.left;
  }

  while (stack.length > 0) {
    let node = stack.pop();
    result.push(node.val);

    node = node.right;
    while (node != null) {
      stack.push(node);
      node = node.left;
    }
  }

  return result;
};
