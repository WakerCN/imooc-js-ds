/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-07-03 09:59 周1
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

/**
 * 思路一：（暴力解法，数据较大时超出运行时间）
 * 1.遍历数组，求出当前元素与后面元素的差值，求出差值的最大值
 * 2.将所有最大值中，求出最大值中的最大值
 *
 * 思路二：
 * 1.求出最大值，最小值，然后判断最大值的下标是否在最小值之后
 */

// @lc code=start
// function maxProfit(prices: number[]): number {
//   const maxArr: number[] = [];
//   for (let i = 0; i < prices.length - 1; i++) {
//     const cur = prices[i];
//     const diff: number[] = [];
//     for (let j = i + 1; j < prices.length; j++) {
//       const element = prices[j];
//       const profit = element - cur;
//       diff.push(profit);
//     }
//     const max = Math.max(...diff);
//     maxArr.push(max);
//   }
//   const finalMax = Math.max(...maxArr);
//   return finalMax > 0 ? finalMax : 0;
// }

// 思路二
function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }

  let min_price = prices[0];
  let max_profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const element = prices[i];
    if (element < min_price) {
      min_price = element;
    }
    const profit = element - min_price;
    if (profit > max_profit) {
      max_profit = profit;
    }
  }
  return max_profit;
}
// @lc code=end

maxProfit([7, 1, 5, 3, 6, 4]);

export {};
