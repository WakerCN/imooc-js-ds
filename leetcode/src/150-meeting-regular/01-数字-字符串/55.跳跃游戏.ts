/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 *
 * 解题思路：
 * 遍历数组，计算最远能跳的位置
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  /** 能到达最远位置 */
  let reach = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (i <= reach && i + element > reach) {
      reach = i + element;
    }
  }
  return reach >= nums.length - 1;
}

// @lc code=end

canJump([1, 2, 3]);
