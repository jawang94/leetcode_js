/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder || !inorder) {
    return null;
  }

  if (preorder.length !== inorder.length) {
    return null;
  }

  return generate(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};

var generate = function(preorder, pl, pr, inorder, il, ir) {
  if (pl > pr || il > ir) {
    return null;
  }

  var root = new TreeNode(preorder[pl]);
  var midIndex = -1;

  for (var i = 0; i < inorder.length; i++) {
    if (inorder[i] === preorder[pl]) {
      midIndex = i;
      break;
    }
  }

  if (midIndex === -1) {
    return null;
  }

  var left = generate(
    preorder,
    pl + 1,
    pl + (midIndex - il),
    inorder,
    il,
    midIndex - 1
  );
  var right = generate(
    preorder,
    pl + (midIndex - il) + 1,
    pr,
    inorder,
    midIndex + 1,
    ir
  );

  root.left = left;
  root.right = right;

  return root;
};

// Recursive solution 80ms faster than ~78.83% and 36.2MB less than ~74.51%
var buildTree = function(preorder, inorder) {
  const recurse = (p1, p2, i1, i2) => {
    if (p1 > p2 || i1 > i2) return null; // sanity check

    let value = preorder[p1], // get the root value
      index = inorder.indexOf(value), // get inorder position
      nLeft = index - i1, // count nodes in left subtree
      root = new TreeNode(value); // build the root node

    // build the left and right subtrees recursively
    root.left = recurse(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = recurse(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  };

  return recurse(0, preorder.length - 1, 0, inorder.length - 1);
};
