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
// 76ms faster than ~96.04% and 36MB less than 100%
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

// Alternate DFS solution ~ same performance as prior solution however more concise
var buildTree = function(inorder, postorder) {
  return dfs(inorder.length - 1, 0, inorder.length - 1);

  function dfs(index, startPos, endPos) {
    if (startPos > endPos) return null;

    var node = new TreeNode(postorder[index]);
    var pos = inorder.indexOf(postorder[index]);

    node.left = dfs(index - (endPos - pos) - 1, startPos, pos - 1);
    node.right = dfs(index - 1, pos + 1, endPos);

    return node;
  }
};
