// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______3______
//        /              \
//     ___5__          ___1__
//    /      \        /      \
//    6      _2       0       8
//          /  \
//          7   4
// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Hide Company Tags Amazon LinkedIn Apple Facebook Microsoft
// Show Tags
// Show Similar Problems

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Amazon LinkedIn Apple Facebook Microsoft
// Hide Tags Tree
// Hide Similar Problems

// reference: http://www.cnblogs.com/anne-vista/p/4815076.html

// Solution 1 56ms faster than 100% and 41.6MB less than 51.11%
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q),
    right = lowestCommonAncestor(root.right, p, q);

  if (!left) return right;
  else if (!right) return left;

  return root;
};

// Solution 2 64ms faster than ~99.44% and 41.5MB less than ~76.67%. Solution 1 slightly better on average.
var lowestCommonAncestor = function(root, p, q) {
  let lca = null;

  let traverse = node => {
    if (node === null) return false;

    let left = traverse(node.left) ? 1 : 0,
      right = traverse(node.right) ? 1 : 0,
      mid = node === p || node === q ? 1 : 0;

    if (left + right + mid >= 2) lca = node;

    return left + right + mid > 0;
  };

  traverse(root);
  return lca;
};
