// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// Hide Company Tags Amazon Microsoft Bloomberg Uber
// Show Tags
// Show Similar Problems

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

var copyRandomList = function(head) {
  if (!head) return null;

  let runner = head;
  while (runner) {
    let cloneNode = new RandomListNode(runner.label);
    cloneNode.next = runner.next;
    runner.next = cloneNode;
    runner = cloneNode.next;
  }

  runner = head;
  while (runner) {
    if (runner.random) {
      runner.next.random = runner.random.next;
    } else {
      runner.next.random = null;
    }
    runner = runner.next.next;
  }

  let originalRunner = head;
  let cloneRunner = head.next;
  let cloneHead = head.next;
  while (originalRunner) {
    originalRunner.next = originalRunner.next.next;
    if (cloneRunner.next) {
      cloneRunner.next = cloneRunner.next.next;
    } else {
      cloneRunner.next = null;
    }
    originalRunner = originalRunner.next;
    cloneRunner = cloneRunner.next;
  }
  return cloneHead;
};
