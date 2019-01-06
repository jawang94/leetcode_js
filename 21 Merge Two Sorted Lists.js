// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Hide Company Tags Amazon LinkedIn Apple Microsoft
// Hide Tags Linked List
// Hide Similar Problems (H) Merge k Sorted Lists (E) Merge Sorted Array (M) Sort List (M) Shortest Word Distance II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var p1 = l1;
  var p2 = l2;
  var fn = new ListNode(-1);
  var p = fn;

  while (p1 && p2) {
    if (p1.val >= p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    p = p.next;
  }

  if (p1) {
    p.next = p1;
  } else {
    p.next = p2;
  }

  return fn.next;
};

// Not Refactored yet, FASTER THAN 100% OF JS SOLUTIONS IN 60MS
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;

  let r1 = l1;
  let r2 = l2;
  if (r1.val <= r2.val) {
    var prev = l1;
    if (r1.next != null) r1 = r1.next;
  } else {
    var prev = l2;
    if (r2.next != null) r2 = r2.next;
  }
  let head = prev;

  while (r1 != null && r2 != null) {
    if (r1.val <= r2.val) {
      let temp = r1;
      r1 = r1.next;
      prev.next = temp;
      prev = temp;
    } else {
      let temp = r2;
      r2 = r2.next;
      prev.next = temp;
      prev = temp;
    }
  }
  if (r2 === null) prev.next = r1;
  else prev.next = r2;

  return head;
};
