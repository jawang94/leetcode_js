// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

// Hide Company Tags Amazon Dropbox Google Uber Facebook
// Hide Tags Backtracking String
// Hide Similar Problems (M) Generate Parentheses (M) Combination Sum

/**
 * @param {string} digits
 * @return {string[]}
 */

var numToLetters = {
  "0": " ",
  "1": "",
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz"
};

var letterCombinations = function(digits) {
  var res = [];

  if (digits.length === 0) {
    return res;
  }

  function dfs(digits, idx, curr) {
    if (idx === digits.length) {
      res.push(curr);
      return;
    }

    var letters = numToLetters[digits[idx]];

    for (var i = 0; i < letters.length; i++) {
      dfs(digits, idx + 1, curr + letters[i]);
    }
  }

  dfs(digits, 0, "");
  return res;
};

// Ratchet 13% solution, pre re-factor
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  const phoneBook = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  if (digits.length === 1) return phoneBook[digits[0]];

  let result = [""];
  for (var i = 0; i < digits.length; i++) {
    let tempArr = [];
    while (result.length) {
      let tempStr = result.shift();
      for (let letter of phoneBook[digits[i]]) {
        tempArr.push(tempStr + letter);
      }
    }
    result = tempArr.slice();
  }
  return result;
};
