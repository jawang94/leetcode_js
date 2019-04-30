/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder === null || postorder === null) return null;
  if (inorder.length !== postorder.length) return null;

  return generate(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};

var generate = function(
  inorder,
  inLeft,
  inRight,
  postorder,
  postLeft,
  postRight
) {
  if (inLeft > inRight || postLeft > postRight) return null;

  var rootVal = postorder[postRight];
  var root = new TreeNode(rootVal);
  var rootIndex = search(inorder, inLeft, inRight, rootVal);

  if (rootIndex < 0) return null;

  var leftTreeSize = rootIndex - inLeft;
  var rightTreeSize = inRight - rootIndex;

  root.left = generate(
    inorder,
    inLeft,
    rootIndex - 1,
    postorder,
    postLeft,
    postLeft + leftTreeSize - 1
  );
  root.right = generate(
    inorder,
    rootIndex + 1,
    inRight,
    postorder,
    postRight - rightTreeSize,
    postRight - 1
  );

  return root;
};

const search = (inOrder, left, right, value) => {
  for (var i = left; i <= right; i++) {
    if (inOrder[i] === value) return i;
  }
  return -1;
};
