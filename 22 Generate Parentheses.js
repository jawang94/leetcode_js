/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  var output = "";

  generate(result, output, 0, n, 0, 0);
  return result;
};

var generate = function(result, output, depth, n, left, right) {
  if (depth === 2 * n) {
    result.push(output);
    return;
  }

  if (left < n) {
    generate(result, output + "(", depth + 1, n, left + 1, right);
  }
  if (left > right) {
    generate(result, output + ")", depth + 1, n, left, right + 1);
  }
};

// 38ms Faster than ~38%
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  let result = [];

  const recurse = (parenthesisString = "", left = 0, right = 0) => {
    if (parenthesisString.length === 2 * n) {
      result.push(parenthesisString);
      return;
    }
    if (left < n) {
      recurse(parenthesisString + "(", left + 1, right);
    }
    if (right < left) {
      recurse(parenthesisString + ")", left, right + 1);
    }
  };

  recurse();
  return result;
};
