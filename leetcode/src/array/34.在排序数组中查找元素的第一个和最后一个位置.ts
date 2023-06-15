/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-06-15 14:33 周4
 * @Description  : 
 */
/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  if (!nums.includes(target)) {
    return [-1, -1];
  } else {
    let first = -1,
      last = -1;
    for (let i = 0; i < nums.length; i++) {
      const cur = nums[i];
      if (cur === target) {
        first = i;
        break;
      }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      const cur = nums[i];
      if (cur === target) {
        last = i;
        break;
      }
    }
    return [first, last];
  }
}
// @lc code=end

export {};
