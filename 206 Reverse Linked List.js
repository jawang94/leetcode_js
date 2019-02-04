// Reverse a singly linked list.

// Uber Facebook Twitter Zenefits Amazon Microsoft Snapchat Apple Yahoo Bloomberg Yelp Adobe
// Show Tags
// Show Similar Problems

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return head;
  let curr = head;
  let prev = null;

  while (curr.next != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  curr.next = prev;
  return curr;
};

// Recursive solution faster than ~94.85%
var reverseList = head => {
  if (head === null || head.next === null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
