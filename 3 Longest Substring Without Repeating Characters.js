/**
 * @param {string} s
 * @return {number}
 */
// 100ms faster than ~79.85%
var lengthOfLongestSubstring = function(s) {
  let count = 0;
  let letterMap = new Map();
  for (var spacer = 0, current = 0; current < s.length; current++) {
    let letter = s[current];
    if (letterMap.has(letter)) {
      spacer = Math.max(letterMap.get(letter), spacer);
    }
    letterMap.set(letter, current + 1);
    count = Math.max(count, current - spacer + 1);
  }
  return count;
};
