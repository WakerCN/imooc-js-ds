/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

/**
 * 先找到两个元素，分别设为已经找到的最大值，和已经找到最小值
 * @param prices
 * @returns
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice;
  let profix = 0;
  if (prices.length <= 1) {
    return profix;
  } else {
    minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
      if (prices[i] - minPrice > profix) {
        profix = prices[i] - minPrice;
      }
    }
    return profix;
  }
}
// @lc code=end

export default maxProfit;
