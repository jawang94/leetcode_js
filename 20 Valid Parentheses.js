/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  if (s.length === 0) return true;
  else if (s.length === 1) return false;

  let stack = [];
  let dict = {
    "}": "{",
    ")": "(",
    "]": "["
  };

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (dict[s[i]] === stack.pop()) {
      continue;
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
