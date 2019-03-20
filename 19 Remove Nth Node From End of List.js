/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var n1 = new ListNode();
  var n2 = new ListNode();
  var dummy = n2;

  n1.next = head;
  n2.next = head;

  while (n > 0 && n1) {
    n1 = n1.next;
    n--;
  }

  if (n > 0) {
    return head;
  }

  while (n1 && n1.next) {
    n1 = n1.next;
    n2 = n2.next;
  }

  n2.next = n2.next.next;

  return dummy.next;
};

// One pass, 64ms faster than ~85.22% and 33.8mb less than 100%
var removeNthFromEnd = function(head, n) {
  if (head === null) return head;

  let nodeMap = new Map();
  let current = head;
  let count = 0;

  while (current != null) {
    nodeMap.set(count, current);
    current = current.next;
    count += 1;
  }

  let nthNode = count - n;

  if (nodeMap.has(nthNode)) {
    let target = nodeMap.get(nthNode);

    if (nthNode === 0) {
      let next = target.next;
      target.next = null;
      return next;
    } else {
      let prev = nodeMap.get(nthNode - 1);
      prev.next = target.next;
      target.next = null;
    }
  }

  return head;
};
