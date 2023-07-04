/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-07-04 11:18 周2
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n < 2) {
    return 1;
  }
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
// @lc code=end

climbStairs(2);

export {};
