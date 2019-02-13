// You have an initial power P, an initial score of 0 points, and a bag of tokens.

// Each token can be used at most once, has a value token[i], and has potentially two ways to use it.

// If we have at least token[i] power, we may play the token face up, losing token[i] power, and gaining 1 point.
// If we have at least 1 point, we may play the token face down, gaining token[i] power, and losing 1 point.
// Return the largest number of points we can have after playing any number of tokens.

// Example 1:

// Input: tokens = [100], P = 50
// Output: 0
// Example 2:

// Input: tokens = [100,200], P = 150
// Output: 1
// Example 3:

// Input: tokens = [100,200,300,400], P = 200
// Output: 2

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
// Merge Sort initial solution in 96ms faster than 44.05%
var bagOfTokensScore = function(tokens, P) {
  let power = P;
  let points = 0,
    result = 0,
    front = 0;
  let sortedTokens = mergeSort(tokens);
  let back = sortedTokens.length - 1;
  while (front <= back && (power >= sortedTokens[front] || points > 0)) {
    while (front <= back && power >= sortedTokens[front]) {
      points++;
      power -= sortedTokens[front];
      front++;
    }
    result = Math.max(points, result);
    if (front <= back && points > 0) {
      power += sortedTokens[back];
      points--;
      back--;
    }
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length < 2) return arr;

  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return result.concat(left.length ? left : right);
};
