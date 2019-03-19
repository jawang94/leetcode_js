/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 68ms faster than ~88.43% and 36.3mb less than ~90.17%
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;

  let slow = head;
  let fast = head.next;

  while (slow != null && fast != null && fast.next != null) {
    if (fast === slow) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
