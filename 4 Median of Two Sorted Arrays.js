// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */

// // http://blog.csdn.net/yutianzuijin/article/details/11499917
// var findMedianSortedArrays = function(nums1, nums2) {
//     var m = nums1.length;
//     var n = nums2.length;
//     var total = m + n;

//     if(total%2 === 1) {
//         return findKth(nums1, m, nums2, n, parseInt(total/2) + 1);
//     } else {
//         return (findKth(nums1, m, nums2, n, parseInt(total/2)) + findKth(nums1, m, nums2, n, parseInt(total/2) + 1))/2;
//     }
// };

// function findKth(a, m, b, n, k) {
//     // always assume that m is equal or smaller than n
//     if(m > n) {
//         return findKth(b, n, a, m, k);
//     }

//     if(m === 0) {
//         return b[k-1];
//     }

//     if(k === 1) {
//         return Math.min(a[0],b[0]);
//     }

//     // divide k into two parts
//     var pa = Math.min(parseInt(k/2), m);
//     var pb = k - pa;

//     if(a[pa - 1] < b[pb - 1]) {
//         return findKth(a.slice(pa), m - pa, b, n, k - pa);
//     } else if(a[pa - 1] > b[pb - 1]) {
//         return findKth(a, m, b.slice(pb), n - pb, k - pb);
//     } else {
//         return a[pa - 1];
//     }
// }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var total = nums1.length + nums2.length;

  if (total % 2 === 1) {
    return findKth(nums1, 0, nums2, 0, parseInt(total / 2) + 1);
  } else {
    return (
      (findKth(nums1, 0, nums2, 0, parseInt(total / 2)) +
        findKth(nums1, 0, nums2, 0, parseInt(total / 2) + 1)) /
      2
    );
  }
};

function findKth(nums1, start1, nums2, start2, kth) {
  var len1 = nums1.length - start1;
  var len2 = nums2.length - start2;

  if (len1 > len2) {
    return findKth(nums2, start2, nums1, start1, kth);
  }

  if (len1 === 0) {
    return nums2[kth - 1];
  }

  if (kth === 1) {
    return Math.min(nums1[start1], nums2[start2]);
  }

  // divide kth into 2 parts
  var part1 = Math.min(parseInt(kth / 2), len1);
  var part2 = kth - part1;

  if (nums1[start1 + part1 - 1] < nums2[start2 + part2 - 1]) {
    return findKth(nums1, start1 + part1, nums2, start2, kth - part1);
  } else if (nums1[start1 + part1 - 1] > nums2[start2 + part2 - 1]) {
    return findKth(nums1, start1, nums2, start2 + part2, kth - part2);
  } else {
    return nums1[start1 + part1 - 1];
  }
}

// Merge Sort solution faster than 21% of solutions...
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2);
  let sortedArr = mergeSort(arr);

  if (sortedArr.length % 2 === 0) {
    let mid = Math.floor(sortedArr.length / 2);
    return (sortedArr[mid] + sortedArr[mid - 1]) / 2;
  } else {
    let mid = Math.floor(sortedArr.length / 2);
    return sortedArr[mid];
  }
};

let mergeSort = arr => {
  if (arr.length < 2) return arr;

  let left = mergeSort(arr.slice(0, arr.length / 2));
  let right = mergeSort(arr.slice(arr.length / 2));

  return merge(left, right);
};

let merge = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return result.concat(left.length ? left : right);
};
