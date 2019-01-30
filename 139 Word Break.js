/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
// Solution w/o memo. Straight iteratively n^2
var wordBreak = function(s, wordDict) {
  if (wordDict === null || wordDict.size === 0) {
    return false;
  }

  var possible = [];
  possible[0] = true;

  for (var i = 0; i < s.length; i++) {
    if (possible[i]) {
      for (var j = i + 1; j <= s.length; j++) {
        var str = s.substring(i, j);
        if (wordDict.has(str)) {
          possible[j] = true;
        }
      }
    }
  }

  return possible[s.length] === true;
};

// Faster than 100%, using memoization
var wordBreak = function(s, wordDict) {
  if (wordDict.length === 0) return false;
  if (wordDict.length === 1) return s === wordDict[0];

  let queue = [""];
  let memo = new Map();

  while (queue.length > 0) {
    const val = queue.shift();

    for (let word of wordDict) {
      const searchWord = `${val}${word}`;
      const startsWith = s.indexOf(searchWord) === 0;

      if (searchWord === s) return true;
      else if (!memo.has(searchWord) && startsWith) {
        memo.set(searchWord, true);
        queue.push(searchWord);
      }
    }
  }

  return false;
};
