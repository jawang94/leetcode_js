/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// Trick question to be honest. Not 'deleting' the node but rather overwriting it and dropping the last node.
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
