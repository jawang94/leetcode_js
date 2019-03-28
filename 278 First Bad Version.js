// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// Hide Company Tags Facebook
// Hide Tags Binary Search
// Hide Similar Problems (M) Search for a Range (M) Search Insert Position (E) Guess Number Higher or Lower

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var beg = 0;
    var end = n;
    var lastBad;

    while (beg <= end) {
      var mid = beg + Math.floor((end - beg) / 2);
      if (isBadVersion(mid)) {
        // everything including and after are bad version
        lastBad = mid;
        end = mid - 1;
      } else {
        beg = mid + 1;
      }
    }

    return lastBad;
  };
};

// 56ms faster than ~89.47% and 33.8MB less than ~48.78%
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let low = 1;
    let high = n;

    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);

      if (isBadVersion(mid)) high = mid;
      else low = mid + 1;
    }

    return low;
  };
};
