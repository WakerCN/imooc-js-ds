/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 * h从0开始遍历，算出比当前h大的数目curNum
 * 如果curNum > h 说明还有可能比h大的h指数，h++
 * 如果curNum < h 结束循环，返回h-1
 */

// @lc code=start
function hIndex(citations: number[]): number {
  let h = 0;
  let flag = true;
  while (flag) {
    let curNum = citations.filter((c) => c >= h).length;
    if (curNum < h) {
      flag = false;
    }
    h++;
  }
  return h - 2;
}
// @lc code=end
hIndex([1, 3, 1]);
