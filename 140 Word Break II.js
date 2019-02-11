// http://fisherlei.blogspot.com/2013/11/leetcode-wordbreak-ii-solution.html
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
const wordBreak = (s, wordDict) => {
  const len = s.length;
  let result = [],
    solutions = [],
    possible = [];

  for (let i = 0; i <= len; i++) possible.push(true);

  recurse(0, s, wordDict, result, solutions, possible);
  return solutions;
};

const recurse = (start, s, wordDict, result, solutions, possible) => {
  if (start === s.length) {
    solutions.push(result.join(" ")); // remove the last space
    return;
  }

  // loop through string from i to s.length
  for (let i = start; i < s.length; i++) {
    let piece = s.substring(start, i + 1);

    // possible is to mark step whether i+1 to s.length have any possible words
    if (wordDict.includes(piece) && possible[i + 1]) {
      // eliminate unnecessary search
      let beforeChange = solutions.length;

      result.push(piece);
      recurse(i + 1, s, wordDict, result, solutions, possible);
      if (solutions.length === beforeChange) possible[i + 1] = false;
      result.pop();
    }
  }
};
