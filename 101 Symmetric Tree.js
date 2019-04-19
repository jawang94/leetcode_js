// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

// Hide Company Tags LinkedIn Bloomberg Microsoft
// Hide Tags Tree Depth-first Search Breadth-first Search

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
// Iterative solution 68 - 72ms and 36MB. Not the best.
var isSymmetric = function(root) {
  let queue = [];
  queue.push(root);

  while (queue.length != 0) {
    let len = queue.length;

    if (!checkSymmetry(queue)) return false;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      if (node !== null) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return true;
};

const checkSymmetry = nodes => {
  let left = 0;
  let right = nodes.length - 1;

  while (left < right) {
    if (
      (nodes[left] === null && nodes[right] === null) ||
      (nodes[left] && nodes[right] && nodes[left].val === nodes[right].val)
    ) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

// Recursive solution 64ms faster than 100% and 35.6MB less than ~30%.
var isSymmetric = function(root) {
  return recursiveSymmetry(root, root);
};

const recursiveSymmetry = (root1, root2) => {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  return (
    root1.val === root2.val &&
    recursiveSymmetry(root1.left, root2.right) &&
    recursiveSymmetry(root1.right, root2.left)
  );
};
