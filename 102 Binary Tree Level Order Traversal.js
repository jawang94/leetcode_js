// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 60ms faster than ~91.03% however 35MB less than ~20.71%. Inefficient memory usage.
var levelOrder = function(root) {
  if (root === null) return [];

  let result = [];
  let queue = [];
  let temp = [];
  let currentLevelCount = 1;
  let nextLevelCount = 0;

  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    temp.push(node.val);
    currentLevelCount--;

    if (node.left) {
      queue.push(node.left);
      nextLevelCount++;
    }

    if (node.right) {
      queue.push(node.right);
      nextLevelCount++;
    }

    if (currentLevelCount === 0) {
      result.push(temp);
      currentLevelCount = nextLevelCount;
      nextLevelCount = 0;
      temp = [];
    }
  }

  return result;
};

// Recursive approach 60ms faster than 100% and 34.9MB less than ~38.46%
var levelOrder = function(root) {
  let result = [];

  const traverse = (node, level) => {
    if (node === null) return node;
    if (!result[level]) result[level] = [];

    result[level].push(node.val);

    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return result;
};
