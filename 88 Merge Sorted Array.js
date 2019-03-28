/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  while (m > 0 && n > 0) {
    if (A[m - 1] > B[n - 1]) {
      A[m + n - 1] = A[m - 1];
      m--;
    } else {
      A[m + n - 1] = B[n - 1];
      n--;
    }
  }

  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
};

// 60ms faster than ~92.38% and 33.9MB less than ~41.79%
var merge = function(nums1, m, nums2, n) {
  let len = m + n;
  m = m - 1;
  n = n - 1;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) nums1[len] = nums1[m--];
    else nums1[len] = nums2[n--];
  }
};
