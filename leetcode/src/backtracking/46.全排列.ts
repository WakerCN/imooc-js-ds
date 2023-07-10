/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  const backtracking = (path: number[]) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((num) => {
      if (path.includes(num)) return;
      backtracking(path.concat(num));
    });
  };

  backtracking([]);

  return res;
}
// @lc code=end

export {};
