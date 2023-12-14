/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

/**
 * 计算每一列左边最高和右边最高的柱子，
 * 去两个柱子中短的高度 - 当前柱子高度
 * @param height
 */
// @lc code=start
function trap(height: number[]): number {
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const element = height[i];
    const left = height.slice(0, i);
    const right = height.slice(i + 1, height.length);
    const leftMax = Math.max(...left);
    const rightMax = Math.max(...right);
    if (leftMax > element && rightMax > element) {
      sum += Math.min(leftMax, rightMax) - element;
    }
  }
  return sum;
}

// @lc code=end
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

export default trap;
