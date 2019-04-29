// Given a binary tree, count the number of uni-value subtrees.

// A Uni-value subtree means all nodes of the subtree have the same value.

// Example :

// Input:  root = [5,1,5,5,5,null,5]

//               5
//              / \
//             1   5
//            / \   \
//           5   5   5

// Output: 4

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 120ms faster than ~9.33% and 38.9MB less than 10%. Not clear on why this solution works. Research and refactor needed.
var countUnivalSubtrees = function(root) {
  if (root === null) return 0;
  let result = 0;

  const traverse = node => {
    if (node.left === null && node.right === null) {
      result += 1;
      return true;
    }

    let uniOrNot = true;

    if (node.left != null) {
      uniOrNot = traverse(node.left) && uniOrNot && node.left.val === node.val;
    }

    if (node.right != null) {
      uniOrNot =
        traverse(node.right) && uniOrNot && node.right.val === node.val;
    }
    console.log(uniOrNot);
    result += uniOrNot;
    return uniOrNot;
  };

  traverse(root);
  return result;
};
