/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// 暴力解法
// function canCompleteCircuit(gas: number[], cost: number[]): number {
//     let num = gas.length;
//     for (let i = 0; i < num; i++) {
//       let j = i;
//       let remain = gas[i];
//       while (remain - cost[j] >= 0) {
//         remain = remain - cost[j] + gas[(j + 1) % num];
//         j = (j + 1) % num;
//         if (j === i) {
//           return i;
//         }
//       }
//     }
//     return -1;
//   }

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let num = gas.length;
  for (let i = 0; i < num; ) {
    /** k是能从i出发能到达的第几个加油站 */
    let k = 0;
    let j = i;
    let remain = gas[i];
    while (remain - cost[j] >= 0) {
      remain = remain - cost[j] + gas[(j + 1) % num];
      j = (j + 1) % num;
      if (k === num) {
        return i;
      }
      k++;
    }
    i += k + 1;
  }
  return -1;
}
// @lc code=end

canCompleteCircuit([0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]);
