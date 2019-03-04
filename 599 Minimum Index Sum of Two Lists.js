// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:

// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:

// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Note:

// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.

// Initial solution. 136ms best case faster than ~42.48% & memory 44MB less than ~7.69%. (Terrible, please refactor & improve space complexity!!!)
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let result = [];
  let indexArr = [];
  let longerArr;
  let shorterArr;

  if (list1.length > list2.length) {
    longerArr = list1;
    shorterArr = list2;
  } else {
    longerArr = list2;
    shorterArr = list1;
  }

  for (let i = 0; i < longerArr.length; i++) {
    let temp = longerArr[i];

    if (shorterArr.indexOf(temp) > -1) {
      indexArr.push([i + shorterArr.indexOf(temp), temp]);
    }
  }

  indexArr = mergeSort(indexArr);

  if (indexArr.length === 1) {
    result.push(indexArr[0][1]);
    return result;
  }

  for (let i = 1; i < indexArr.length; i++) {
    if (indexArr[i][0] === indexArr[i - 1][0]) {
      if (i === 1) result.push(indexArr[i][1], indexArr[i - 1][1]);
      else result.push(indexArr[i][1]);
    } else {
      result.push(indexArr[i - 1][1]);
      break;
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
    result.push(left[0][0] < right[0][0] ? left.shift() : right.shift());
  }

  return result.concat(left.length ? left : right);
};
