// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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

var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let carry = 0;
  let resultList = new ListNode(0);
  let sumRunner = resultList;
  let runnerOne = l1;
  let runnerTwo = l2;
  while (runnerOne != null || runnerTwo != null) {
    if (runnerOne == null) {
      runnerOne = new ListNode(0);
    } else if (runnerTwo == null) {
      runnerTwo = new ListNode(0);
    }
    sum = runnerOne.val + runnerTwo.val + carry;
    carry = Math.floor(sum / 10);
    sumRunner.next = new ListNode(sum % 10);
    sumRunner = sumRunner.next;
    runnerOne = runnerOne.next;
    runnerTwo = runnerTwo.next;
  }
  if (carry > 0) {
    sumRunner.next = new ListNode(carry);
  }
  return resultList.next;
};
