/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var results = [];
  nums.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 3; i++) {
    while (i > 0 && i < nums.length - 3 && nums[i] === nums[i - 1]) {
      i++;
    }
    for (var j = i + 1; j < nums.length - 2; j++) {
      while (j > i + 1 && j < nums.length - 2 && nums[j] === nums[j - 1]) {
        j++;
      }
      var low = j + 1;
      var high = nums.length - 1;
      var newTarget = target - (nums[i] + nums[j]);
      while (low < high) {
        partialSum = nums[low] + nums[high];
        if (partialSum === newTarget) {
          results.push([nums[i], nums[j], nums[low], nums[high]]);
          high--;
          low++;
          while (low < high && nums[low] === nums[low - 1]) {
            low++;
          }
          while (low < high && nums[high] === nums[high + 1]) {
            high--;
          }
        } else if (partialSum > newTarget) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return results;
};

// Solution 2 (more stable than solution 1). Consistently 92ms, as low as 88ms faster than 97.45%
var fourSum = function(nums, target) {
  var ret = [];

  if (nums.length == 0) return ret;

  nums.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < nums.length; i++) {
    var target2 = target - nums[i];

    for (var j = i + 1; j < nums.length; j++) {
      var target3 = target2 - nums[j];

      var front = j + 1;
      var back = nums.length - 1;

      while (front < back) {
        var sum = nums[front] + nums[back];

        if (sum < target3) front++;
        else if (sum > target3) back--;
        else {
          var temp = new Array(4);
          temp[0] = nums[i];
          temp[1] = nums[j];
          temp[2] = nums[front];
          temp[3] = nums[back];
          ret.push(temp);

          while (front < back && nums[front] === temp[2]) front++;

          while (front < back && nums[back] === temp[3]) back--;
        }
      }

      while (j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
    }

    while (i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
  }

  return ret;
};

// Refactored final solution
const fourSum = (nums, target) => {
  let result = [];

  if (nums.length == 0) return result;

  nums.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let newTarget = target - (nums[i] + nums[j]);

      let front = j + 1;
      let back = nums.length - 1;

      while (front < back) {
        let sum = nums[front] + nums[back];

        if (sum < newTarget) ++front;
        else if (sum > newTarget) --back;
        else {
          let frontMarker = nums[front];
          let backMarker = nums[back];

          result.push([nums[i], nums[j], frontMarker, backMarker]);
          front++;
          back--;

          while (front < back && nums[front] === frontMarker) ++front;
          while (front < back && nums[back] === backMarker) --back;
        }
      }

      while (j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
    }

    while (i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
  }

  return result;
};
