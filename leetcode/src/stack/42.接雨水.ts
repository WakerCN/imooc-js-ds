/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

/**
 * 思路：
 * 1.算出左右最高的柱子
 * 2.接到的水为较小高度的柱子
 *
 */

// @lc code=start
function trap(height: number[]): number {
  let sum = 0;
  for (let row = 1; row < height.length - 1; row++) {
    /** 左侧数组 */
    const lArr = height.slice(0, row);
    /** 右侧数组 */
    const rArr = height.slice(row + 1, height.length);
    const lMax = Math.max(...lArr);
    const rMax = Math.max(...rArr);
    const curHeight = height[row];
    if (lMax > curHeight && rMax > curHeight) {
      sum += Math.min(lMax, rMax) - curHeight;
    }
  }
  return sum;
}
// @lc code=end

const res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(
  "%c 🍪 res ",
  "font-size:16px;color:#ffffff;background:#f0932b",
  res
);
