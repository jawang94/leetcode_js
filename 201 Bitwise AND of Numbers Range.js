/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var rangeBitwiseAnd = function(m, n) {
  while (n > m) {
    n = n & (n - 1);
  }

  return m & n;
};
