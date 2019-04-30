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
    result += uniOrNot;
    return uniOrNot;
  };

  traverse(root);
  return result;
};

// 64ms faster than ~100% and 35.7MB less than ~50%
var countUnivalSubtrees = function(root) {
  if (root === null) return 0;
  let result = 0;

  const traverse = node => {
    if (node === null) return true;

    if (!node.left && !node.right) {
      result += 1;
      return true;
    }

    let leftTree = traverse(node.left);
    let rightTree = traverse(node.right);

    if (leftTree && rightTree) {
      if (
        node.left &&
        node.right &&
        node.val === node.left.val &&
        node.val === node.right.val
      ) {
        result += 1;
        return true;
      } else if (!node.right && node.val === node.left.val) {
        result += 1;
        return true;
      } else if (!node.left && node.val === node.right.val) {
        result += 1;
        return true;
      }

      return false;
    }
  };

  traverse(root);
  return result;
};
