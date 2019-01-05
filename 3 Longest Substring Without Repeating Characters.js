/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  var map = new Map();
  var count = 0;
  for (var i = 0, j = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }
    map.set(s[j], j + 1);
    count = Math.max(count, j - i + 1);
  }
  return count;
};
