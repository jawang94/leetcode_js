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
var hasCycle = function(head) {
  if (head === null) return false;
  else if (head === []) return head;
  let walker = head;
  let runner = head.next;
  while (walker != null && runner != null && runner.next != null) {
    if (walker === runner) return true;
    walker = walker.next;
    runner = runner.next.next;
  }
  return false;
};
