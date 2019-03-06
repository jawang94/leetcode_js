// Given a binary tree, return the vertical order traversal of its nodes values.

// For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

// Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

// If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

// Example 1:
// https://assets.leetcode.com/uploads/2019/01/31/1236_example_1.PNG
// Input: [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Without loss of generality, we can assume the root node is at position (0, 0):
// Then, the node with value 9 occurs at position (-1, -1);
// The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
// The node with value 20 occurs at position (1, -1);
// The node with value 7 occurs at position (2, -2).

// Example 2:
// https://assets.leetcode.com/uploads/2019/01/31/tree2.png
// Input: [1,2,3,4,5,6,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation:
// The node with value 5 and the node with value 6 have the same position according to the given scheme.
// However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.

// Note:
// The tree will have between 1 and 1000 nodes.
// Each node's value will be between 0 and 1000.

// Alpha solution implementing mergeSort going out of memory on certain edge case.
var verticalTraversal = function(root) {
  let locations = [];
  let result = [];

  const traverse = (node, x, y) => {
    if (!node) return;
    else {
      locations.push([[x, y], node.val]);
      traverse(node.left, x - 1, y - 1);
      traverse(node.right, x + 1, y - 1);
    }
  };

  traverse(root, 0, 0);
  // locations = mergeSort(locations);
  console.log(locations);

  for (let i = 1; i < locations.length; i++) {
    if (
      locations[i][0][0] != locations[i - 1][0][0] &&
      i === locations.length - 1
    ) {
      result.push([locations[i - 1][1]]);
      result.push([locations[i][1]]);
    } else if (
      locations[i][0][0] != locations[i - 1][0][0] &&
      i < locations.length - 1
    ) {
      result.push([locations[i - 1][1]]);
    } else {
      let pushMe = [];
      let j = false;
      while (locations[i][0][0] === locations[i - 1][0][0]) {
        if (j === true) {
          pushMe.push(locations[i][1]);
        } else {
          pushMe.push(locations[i - 1][1]);
          pushMe.push(locations[i][1]);
          j = true;
        }
        if (i < locations.length - 1) {
          i = i + 1;
        }
      }
      result.push(pushMe);
    }
  }

  return result;
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

  while (left.length > 0 && right.length > 0) {
    if (left[0][0][0] === right[0][0][0]) {
      if (left[0][0][1] === right[0][0][1])
        result.push(left[0][1] < right[0][1] ? left.shift() : right.shift());
      else
        result.push(
          left[0][0][1] > right[0][0][1] ? left.shift() : right.shift()
        );
    } else {
      result.push(
        left[0][0][0] < right[0][0][0] ? left.shift() : right.shift()
      );
    }
  }

  return result.concat(left.length ? left : right);
};

// Proxied solution runs fine 68ms faster than ~98.57%
var verticalTraversal = function(root) {
  let nodes = [];
  let result = [];
  let currentIndex = -1;
  let currentX = null;
  const traversal = (root, x, y) => {
    if (!root) return;
    let data = {
      x: x,
      y: y,
      val: root.val
    };
    nodes.push(data);
    traversal(root.left, x - 1, y - 1);
    traversal(root.right, x + 1, y - 1);
  };
  traversal(root, 0, 0);
  nodes.sort(function(a, b) {
    if (a.x - b.x > 0) return 1;
    else if (a.x - b.x == 0) {
      if (b.y - a.y > 0) return 1;
      else if (a.y - b.y == 0) {
        return a.val - b.val;
      } else return -1;
    } else return -1;
  });

  for (node of nodes) {
    if (currentX === node.x) {
      result[currentIndex].push([node.val]);
    } else {
      currentIndex++;
      currentX = node.x;
      if (!result[currentIndex]) {
        result[currentIndex] = [node.val];
      } else {
        result[currentIndex].push([node.val]);
      }
    }
  }

  return result;
};
