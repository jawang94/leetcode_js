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

// Recursive approach...runs in similar time and space complexity. Hmm.
var levelOrder = function(root) {
  let result = [];

  if (root === null) return result;

  const traverseLevels = (node, level) => {
    if (result.length === level) result.push([]);

    result[level].push(node.val);

    if (node.left) traverseLevels(node.left, level + 1);
    if (node.right) traverseLevels(node.right, level + 1);
  };

  traverseLevels(root, 0);
  return result;
};
