// Write a function that takes a string as input and returns the string reversed.

// Input: "hello";
// Output: "olleh";

// Input: "A man, a plan, a canal: Panama"
// Output: "amanaP :lanac a ,nalp a ,nam A"

// One line solution faster than ~80%
var reverseString = function(s) {
  s.reverse();
};

// Faster then ~50%
var reverseString = function(s) {
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};

var reverseString = function(s) {
  let len = s.length;
  let tempStr = "";
  for (let i = len - 1; i >= 0; i--) {
    tempStr += s[i];
  }
  s = tempStr;
  return s;
};
