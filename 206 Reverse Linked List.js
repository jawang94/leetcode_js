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
// 60ms faster than ~93.19% & 35.1mb less than ~35.63%
const reverseList = head => {
  if (head === [] || head === null) return head;

  let current = head;
  let prev = null;

  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

// Recursive approach slightly less efficient @ 64ms && 36mb
// const reverseList = head => {
//     if (head === [] || head === null || head.next === null) return head;
//     let next = reverseList(head.next)
//     head.next.next = head;
//     head.next = null;
//     return next;
// }
