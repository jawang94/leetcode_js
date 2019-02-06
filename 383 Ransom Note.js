// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

// Ratchet solution BRUTE FORCE faster than ~10%...
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let myMap = new Map();
  for (var i = 0; i < magazine.length; i++) {
    if (!myMap.has(magazine[i])) myMap.set(magazine[i], 1);
    else if (myMap.has(magazine[i]))
      myMap.set(magazine[i], myMap.get(magazine[i]) + 1);
  }
  let ransomTemp = ransomNote;
  for (var j = ransomTemp.length - 1; j > -1 && ransomTemp.length > 0; j--) {
    if (myMap.has(ransomTemp[j]) && myMap.get(ransomTemp[j]) != 0)
      myMap.set(ransomTemp[j], myMap.get(ransomTemp[j]) - 1);
    else if (myMap.has(ransomTemp[j]) && myMap.get(ransomTemp[j]) === 0)
      return false;
    else if (!myMap.has(ransomTemp[j])) return false;
  }
  return true;
};
