// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

// input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]
// output: [3, 6, 7] # since only these three values are both in arr1 and arr2

function findDuplicates(arr1, arr2) {
  let result = [];
  let shortArr;
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      result.push(arr1[i]);
      i = i + 1;
      j = j + 1;
    } else if (arr1[i] < arr2[j]) {
      i = i + 1;
    } else {
      j = j + 1;
    }
  }
  return result;
}
