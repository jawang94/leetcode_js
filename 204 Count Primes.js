// Description:

// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) {
    return 0;
  }

  var mem = [];

  for (var i = 2; i < n; i++) {
    mem[i] = true;
  }

  sq = parseInt(Math.sqrt(n - 1));

  for (i = 2; i <= sq; i++) {
    if (mem[i]) {
      for (var j = i + i; j < mem.length; j += i) {
        mem[j] = false;
      }
    }
  }

  var count = 0;
  for (i = 2; i < mem.length; i++) {
    if (mem[i]) {
      count++;
    }
  }

  return count;
};

/**
 * @param {number} n
 * @return {number}
 */
// Brute force 168ms faster than ~66.96% and 130.2MB less than ~9.09%...too much memory usage.
var countPrimes = function(n) {
  let seen = [];
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (seen[i] === undefined) {
      count += 1;
      for (let j = 1; j * i < n; j++) seen[i * j] = 1;
    }
  }

  return count;
};
