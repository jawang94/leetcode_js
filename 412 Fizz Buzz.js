// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
// 68ms faster than ~90.54% and 37.5MB less than ~10.94%
var fizzBuzz = function(n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) output.push("FizzBuzz");
    else if (i % 5 === 0) output.push("Buzz");
    else if (i % 3 === 0) output.push("Fizz");
    else output.push("" + i);
  }

  return output;
};
