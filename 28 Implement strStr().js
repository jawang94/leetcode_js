// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Super brute force, worst solution ever. ~8896 faster than ~5.02% space 65.7mb less than ~5.31%
var strStr = function(haystack, needle) {
  if (needle.length < 1) return 0;

  for (let i = 0, j; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let window = "";
      j = i;

      while (j - i < needle.length) {
        window += haystack[j];
        j += 1;
      }
      if (window === needle) return i;
    }
  }

  return -1;
};
