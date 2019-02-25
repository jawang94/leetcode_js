// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// For example,

// Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

// Return:
// ["AAAAACCCCC", "CCCCCAAAAA"].
// Hide Company Tags LinkedIn
// Hide Tags Hash Table Bit Manipulation

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  var hash = {};
  var result = [];

  for (var i = 10; i <= s.length; i++) {
    var substr = s.substring(i - 10, i);
    if (hash[substr] === undefined) {
      hash[substr] = 1;
    } else if (hash[substr] === 1) {
      hash[substr]++;
      result.push(substr);
    }
  }

  return result;
};

// 84ms faster than 96.50% of solutions
var findRepeatedDnaSequences = function(s) {
  let store = new Set(),
    result = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const str = s.substring(i, i + 10);
    if (store.has(str)) {
      result.add(str);
    } else {
      store.add(str);
    }
  }
  return Array.from(result);
};

// Should work but doesn't work (not sure why?)
// var findRepeatedDnaSequences = function(s) {
//     if (s.length < 1) return [];
//     let result = [];
//     let sequence = "";

//     for (var i = 0; i < s.length - 9; i++) {
//         for (var j = i; j < s.length; j++) {
//             if (sequence.length === 10) {
//                 let left = s.slice(0, i);
//                 let right = s.slice(j);
//                 let inputSlice;

//                 if (left.length > 9 && right.length > 9) inputSlice = left.concat(right);
//                 else if (left.length > 9 && right.length < 10) inputSlice = left;
//                 else inputSlice = right;
//                 console.log(inputSlice, sequence);
//                 let possible = DnaSequencer(inputSlice, sequence);
//                 if (possible != -1 && result.indexOf(possible) === -1) result.push(possible);
//             } else sequence += s[j];
//         }
//         sequence = "";
//     }

//     return result;
// };

// const DnaSequencer = (input, sequence) => {
//     if (input.indexOf(sequence) > -1) {
//         return sequence;
//     }
//     return -1;
// }
