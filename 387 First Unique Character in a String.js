// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2

/**
 * @param {string} s
 * @return {number}
 */

// First solution...100ms faster than ~77.45% & memory 38.5mb less than ~43.78%. Not too shabby.
var firstUniqChar = function(s) {
  const len = s.length;
  let reference = new Map();
  let result = len;

  for (let i = 0; i < len; i++) {
    let current = s[i];

    if (!reference.has(current)) reference.set(current, 1);
    else reference.set(current, reference.get(current) + 1);
  }

  let keys = reference.keys();
  let iterator = keys.next();

  while (!iterator.done) {
    let letter = iterator.value;

    if (reference.get(letter) === 1) {
      let pos = s.indexOf(letter);
      if (pos > -1 && pos < result) result = pos;
    }
    iterator = keys.next();
  }

  if (result === len) return -1;
  else return result;
};
