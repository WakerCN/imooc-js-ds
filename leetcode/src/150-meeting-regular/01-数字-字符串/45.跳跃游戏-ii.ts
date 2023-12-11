/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  let position = nums.length - 1;
  let step = 0;
  while (position > 0) {
    for (let i = 0; i < nums.length; i++) {
      const cur = nums[i];
      if (i + cur >= position) {
        position = i;
        step++;
        break;
      }
    }
  }
  return step;
}
// @lc code=end
