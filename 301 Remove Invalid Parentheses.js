// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Examples:
// "()())()" -> ["()()()", "(())()"]
// "(a)())()" -> ["(a)()()", "(a())()"]
// ")(" -> [""]
// Credits:
// Special thanks to @hpplayer for adding this problem and creating all test cases.

// Hide Company Tags Facebook
// Hide Tags Depth-first Search Breadth-first Search
// Hide Similar Problems (E) Valid Parentheses

/**
 * @param {string} s
 * @return {string[]}
 */

function isValid(s) {
  var count = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

var removeInvalidParentheses = function(s) {
  var queue = [];
  queue.push(s);
  var visited = {};
  var res = [];
  var found = false;

  // breadth first search since we are looking for the minimum changes
  while (queue.length > 0) {
    s = queue.shift();

    // things stored in the queue represent the same level (same number of changes)
    // once we found a valid one, we should not look further into the next level (by setting found to true)
    if (isValid(s)) {
      res.push(s);
      found = true;
    }

    if (found) {
      continue;
    }

    // if nothing found, then loop through the entire string and remove one of the parenthesis.
    for (var i = 0; i < s.length; i++) {
      if (s[i] !== "(" && s[i] !== ")") {
        continue;
      }

      var newS = s.substring(0, i) + s.substring(i + 1);

      if (!visited[newS]) {
        visited[newS] = true;
        queue.push(newS);
      }
    }
  }

  return res;
};

// Recursive backtracking approach 76ms faster than ~80%
const removeInvalidParentheses = s => {
  let output = [];

  let left = 0;
  let right = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else if (s[i] === ")") {
      if (left === 0) right++;
      if (left > 0) left--;
    }
  }

  const recurse = (input, index, lCount, rCount, lExtra, rExtra, current) => {
    if (index === input.length) {
      if (lExtra === 0 && rExtra === 0) {
        if (!output.includes(current)) output.push(current);
      }
    } else {
      let e = input[index];
      if ((lExtra > 0 && e === "(") || (rExtra > 0 && e === ")")) {
        recurse(
          input,
          index + 1,
          lCount,
          rCount,
          lExtra - (e === "(" ? 1 : 0),
          rExtra - (e === ")" ? 1 : 0),
          current
        );
      }
      current = current + e;
      if (e != "(" && e != ")") {
        recurse(input, index + 1, lCount, rCount, lExtra, rExtra, current);
      } else if (e === "(") {
        recurse(input, index + 1, lCount + 1, rCount, lExtra, rExtra, current);
      } else if (e === ")" && rCount < lCount) {
        recurse(input, index + 1, lCount, rCount + 1, lExtra, rExtra, current);
      }
    }
  };

  recurse(s, 0, 0, 0, left, right, "");
  return output;
};

// Refactored backtrack 64ms faster than ~89.46% & 36.6MB less than ~86.36%
const removeInvalidParentheses = s => {
  let output = [];
  let left = 0;
  let right = 0;
  
  for (let i = 0; i < s.length; ++i) {
      if (s[i] === "(") ++left;
      else if (s[i] === ")") {
          if (left === 0) ++right;
          if (left > 0) --left;
      }
  }
  
  const recursiveSearch = (input, index, leftCount, rightCount, leftExtra, rightExtra, current) => {
      if (index === input.length) {
          if (leftExtra === 0 && rightExtra === 0) {
              if (!output.includes(current)) output.push(current);
          }
      } else {
          let e = input[index];
          if ((leftExtra > 0 && e === "(") || (rightExtra > 0 && e === ")")) {
              recursiveSearch(input, index + 1, leftCount, rightCount, leftExtra - (e === "(" ? 1 : 0), rightExtra - (e === ")" ? 1 : 0), current);
          }
          current += e;
          if (e != "(" && e != ")") recursiveSearch(input, ++index, leftCount, rightCount, leftExtra, rightExtra, current);
          else if (e === "(") recursiveSearch(input, ++index, ++leftCount, rightCount, leftExtra, rightExtra, current);
          else if (e === ")" && rightCount < leftCount) recursiveSearch(input, ++index, leftCount, ++rightCount, leftExtra, rightExtra, current);
      }
  }
  
  recursiveSearch(s, 0, 0, 0, left, right, "");
  return output;
};
