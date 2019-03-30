// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var n1 = 1;
  var n2 = 1;

  // n1 and n2 stands for how many ways it can reach n taking one step or two steps, such as n - 1 and n - 2
  for (var i = 2; i <= n; i++) {
    var ways = n1 + n2;
    n1 = n2;
    n2 = ways;
  }

  return n2;
};

// 56ms faster than ~95.04% and 33.7MB less than 46.96%
var climbStairs = function(n) {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }

  return second;
};
