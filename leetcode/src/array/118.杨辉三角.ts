/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-06-30 10:06 周5
 * @Description  : 
 */
/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let curRow = 1; curRow <= numRows; curRow++) {
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
  return res;
}
// @lc code=end


export {};
