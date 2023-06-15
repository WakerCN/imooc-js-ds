/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-06-15 14:22 周4
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  if (!nums.includes(target)) {
    return -1;
  } else {
    let i: number = -1;
    nums.forEach((n, index) => {
      if (n === target) {
        i = index;
      }
    });
    return i;
  }
}
// @lc code=end

export {};
