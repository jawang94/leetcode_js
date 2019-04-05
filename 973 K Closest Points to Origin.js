// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// Example 1:

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)

// Note:

// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// Brute force method 348ms faster than ~15.77% and 68MB less than ~13.25%. Need to improve.
var kClosest = function(points, K) {
  const len = points.length;

  if (len < K) return points;

  let distances = [];
  let output = [];
  let count = 0;

  for (let i = 0; i < len; i++) {
    let int1 = points[i][0];
    let int2 = points[i][1];
    let distance = Math.sqrt(int1 * int1 + int2 * int2);
    distances.push([distance, points[i]]);
  }

  distances = mergeSort(distances);

  while (count < K) {
    output.push(distances[count][1]);
    count = count + 1;
  }

  return output;
};

const mergeSort = arr => {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    result.push(left[0][0] < right[0][0] ? left.shift() : right.shift());
  }

  return result.concat(left.length ? left : right);
};
