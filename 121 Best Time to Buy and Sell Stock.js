// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.
// Hide Company Tags Amazon Microsoft Bloomberg Uber Facebook
// Hide Tags Array Dynamic Programming
// Hide Similar Problems (M) Maximum Subarray (M) Best Time to Buy and Sell Stock II (H) Best Time to Buy and Sell Stock III (H) Best Time to Buy and Sell Stock IV (M) Best Time to Buy and Sell Stock with Cooldown

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  
  for (var i = 1; i < prices.length; i++) {
      if (prices[i] > min) profit = Math.max(profit, prices[i] - min);
      else if (prices[i] < min) min = prices[i];
  }
  
  return profit;
};

// Originally had O(N^2) solutions which required 4900 and then refactored to more efficient 0(N^2) which required 420ms.
// Current solution is O(N) and top 100% in ~56ms
