// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

// Refactored BRUTE FORCE faster than ~14%...
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let myDict = {};
  for (var i = 0; i < magazine.length; i++) {
    if (!myDict[magazine[i]]) myDict[magazine[i]] = 1;
    else if (myDict[magazine[i]]) myDict[magazine[i]] += 1;
  }
  let ransomTemp = ransomNote;
  for (var j = ransomTemp.length - 1; j > -1 && ransomTemp.length > 0; j--) {
    if (myDict[ransomTemp[j]] && myDict[ransomTemp[j]] != 0)
      myDict[ransomTemp[j]] -= 1;
    else if (myDict[ransomTemp[j]] && myDict[ransomTemp[j]] === 0) return false;
    else if (!myDict[ransomTemp[j]]) return false;
  }
  return true;
};
