/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

/**
 * 思路：初始化糖果
 * 左边和右边分别初始置为1，
 * 从左往右遍历，左规则判断，如果分数比左边高，糖果等于左边数+1，否则置为1
 * 右边一样
 */
// @lc code=start
function candy(ratings: number[]): number {
  let left = new Array(ratings.length).fill(1);
  let right = new Array(ratings.length).fill(1);
  for (let i = 1; i < left.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }

  for (let i = right.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }

  return ratings.reduce((pre, cur, index) => {
    return pre + Math.max(left[index], right[index]);
  }, 0);
}
// @lc code=end
