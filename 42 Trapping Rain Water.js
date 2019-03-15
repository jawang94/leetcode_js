// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example,
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// http://bangbingsyb.blogspot.com/2014/11/leetcode-trapping-rain-water.html

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  const n = height.length;
  let rain = 0;
  let LtoR = new Array(n).fill(0);
  let RtoL = new Array(n).fill(0);
  let tempL = height[0];
  let tempR = height[n - 1];

  for (let i = 0; i < n; i++) {
    if (height[i] > tempL) {
      tempL = height[i];
      LtoR[i] = tempL;
    } else LtoR[i] = tempL;

    if (height[n - i - 1] > tempR) {
      tempR = height[n - i - 1];
      RtoL[n - i - 1] = tempR;
    } else RtoL[n - i - 1] = tempR;
  }

  for (let j = 0; j < n; j++) {
    if (LtoR[j] < RtoL[j]) rain += LtoR[j] - height[j];
    else rain += RtoL[j] - height[j];
  }

  return rain;
};
