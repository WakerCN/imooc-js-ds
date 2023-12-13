/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  let left = new Array(nums.length);
  let right = new Array(nums.length);
  let answer = new Array(nums.length);
  left[0] = 1;
  for (let i = 1; i < left.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
}
// @lc code=end
productExceptSelf([1, 2, 3, 4]);
