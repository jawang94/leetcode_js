// Write a function that takes a string as input and returns the string reversed.

// Input: "hello";
// Output: "olleh";

// Input: "A man, a plan, a canal: Panama"
// Output: "amanaP :lanac a ,nalp a ,nam A"

var reverseString = function(s) {
  let len = s.length;
  let tempStr = "";
  for (let i = len - 1; i >= 0; i--) {
    tempStr += s[i];
  }
  s = tempStr;
  return s;
};
