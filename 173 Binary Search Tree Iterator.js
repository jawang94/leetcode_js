// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

// Hide Company Tags LinkedIn Google Facebook Microsoft
// Hide Tags Tree Stack Design
// Hide Similar Problems (M) Binary Tree Inorder Traversal (M) Flatten 2D Vector (M) Zigzag Iterator (M) Peeking Iterator (M) Inorder Successor in BST

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.pushLeft(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  if (this.hasNext()) {
    var node = this.stack.pop();

    if (node.right) {
      this.pushLeft(node.right);
    }

    return node.val;
  }
};

BSTIterator.prototype.pushLeft = function(node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// Reverse In Order Traversal, pre-generating list of values. Faster than ~24%.
var BSTIterator = function(root) {
  this.nodeStack = [];
  this.reverseInOrderTraversal(root);
};

BSTIterator.prototype.reverseInOrderTraversal = function(node) {
  if (node === null) return;
  if (node.right) this.reverseInOrderTraversal(node.right);
  this.nodeStack.push(node.val);
  if (node.left) this.reverseInOrderTraversal(node.left);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.nodeStack.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  if (this.nodeStack.length > 0) return true;
  else return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
