// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each intermediate word must exist in the word list
// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// Amazon LinkedIn Snapchat Facebook Yelp

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// About 520ms faster than ~50% and 42.7MB less than ~70%
var ladderLength = function(beginWord, endWord, wordList) {
  let result = 1;
  const visited = new Set([beginWord]);
  let queue = [];
  const words = new Set(wordList);

  queue.push(beginWord);
  while (queue.length) {
    const nextQueue = [];

    for (let cur of queue) {
      if (cur === endWord) {
        return result;
      }

      const curArr = cur.split("");
      for (let i = 0; i < curArr.length; i++) {
        for (let j = 0; j < 26; j++) {
          curArr[i] = String.fromCharCode(96 + j);
          const newStr = curArr.join("");
          if (!visited.has(newStr) && words.has(newStr)) {
            nextQueue.push(newStr);
            visited.add(newStr);
          }
          curArr[i] = cur[i];
        }
      }
    }

    queue = nextQueue;
    result += 1;
  }

  return 0;
};
