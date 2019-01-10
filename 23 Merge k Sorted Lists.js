// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
// http://www.cnblogs.com/springfor/p/3869217.html

// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Hide Company Tags LinkedIn Google Uber Airbnb Facebook Twitter Amazon Microsoft
// Hide Tags Divide and Conquer Linked List Heap
// Hide Similar Problems (E) Merge Two Sorted Lists (M) Ugly Number II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Efficient solution. O(NlogM) and around 80ms
var mergeKLists = function(lists, low = 0, high = lists.length - 1) {
  if (lists.length === 0) return null;
  if (low === high) {
    return lists[low];
  }

  let mid = Math.floor((low + high) / 2);
  let left = mergeKLists(lists, low, mid);
  let right = mergeKLists(lists, mid + 1, high);

  return merge(left, right);
};

const merge = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
};

// Slow solution - O(N*M) and about 340ms
// var mergeKLists = function(lists) {
//   if (lists.length === 0) return null;

//   for (var i = 1; i < lists.length; i++) {
//     lists[0] = merge(lists[0], lists[i]);
//   }

//   return lists[0];
// };

// const merge = (l1, l2) => {
//   if (l1 === null) {
//     return l2;
//   }
//   if (l2 === null) {
//     return l1;
//   }
//   if (l1.val < l2.val) {
//     l1.next = merge(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = merge(l1, l2.next);
//     return l2;
//   }
// };
