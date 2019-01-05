// Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
// Amazon Microsoft Bloomberg
// Show Tags
// Show Similar Problems

/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = s => {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      res = checkPal(s, res, i, i + 1);
    }
    res = checkPal(s, res, i, i);
  }
  return res;
};

const checkPal = (s, result, left, right) => {
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      left -= 1;
      right += 1;
    } else break;
  }
  left += 1;
  right -= 1;
  return right - left + 1 > result.length
    ? s.substring(left, right + 1)
    : result;
};
