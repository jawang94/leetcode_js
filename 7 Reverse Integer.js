// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// 96ms, faster than 89.57%. First solution.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) return 0;
  let arr = [];
  let y = Math.abs(x);
  while (Math.floor(y) > 0) {
    arr.push(Math.floor(y % 10));
    y = Math.floor(y / 10);
  }
  let str = "";
  if (x < 0) str += "-";
  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && arr[i] === 0) continue;
    str += arr[i];
  }
  if (parseInt(str) > 2147483647 || parseInt(str) < -2147483647) return 0;
  return parseInt(str);
};
