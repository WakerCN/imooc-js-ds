/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-06-30 10:38 周5
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  const res: number[][] = [];
  for (let curRow = 1; curRow <= rowIndex + 1; curRow++) {
    const lineArr: number[] = [];
    for (let i = 1; i <= curRow; i++) {
      if (i === 1 || i === curRow) {
        lineArr.push(1);
      } else {
        lineArr.push(res[curRow - 2][i - 2] + res[curRow - 2][i - 1]);
      }
    }
    res.push(lineArr);
  }
  return res[rowIndex];
}
// @lc code=end

export {};
