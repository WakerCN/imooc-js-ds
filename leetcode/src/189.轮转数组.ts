/*
 * @lc app=leetcode.cn id=189 lang=typescript
 * @link
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @link https://leetcode.cn/problems/rotate-array/description/
 *
 * Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  /** 实际移动步数 */
  let realStep = k % nums.length;
  const originArr = [...nums];
  const tailArr = nums.slice(nums.length - realStep);
  for (let i = realStep; i < nums.length; i++) {
    nums[i] = originArr[i - realStep];
  }
  for (let i = 0; i < realStep; i++) {
    nums[i] = tailArr[i];
  }
}
// @lc code=end

rotate([1, 2, 3, 4, 5, 6, 7], 3);

export default rotate;
