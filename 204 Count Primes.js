// Description:

// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
// Ever so slightly better...156ms faster than ~76.20% and 128.5MB less than ~13.63%
var countPrimes = function(n) {
  if (n <= 2) return 0;

  let memo = [];

  for (var i = 2; i < n; i++) {
    memo[i] = true;
  }

  let sqRt = Math.sqrt(n - 1);

  for (i = 2; i <= sqRt; i++) {
    if (memo[i]) {
      for (var j = 2 * i; j < memo.length; j += i) {
        memo[j] = false;
      }
    }
  }

  let count = 0;

  for (i = 2; i < memo.length; i++) {
    if (memo[i]) count += 1;
  }

  return count;
};

/**
 * @param {number} n
 * @return {number}
 */
// Brute force 164ms faster than ~71.03% and 130.1MB less than ~10.60%...too much memory usage.
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
