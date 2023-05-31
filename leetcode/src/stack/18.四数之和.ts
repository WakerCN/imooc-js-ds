/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

/*
 * 思路：
 * 1.排序
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  let res: number[][] = [];
  let posNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < posNums.length - 3; i++) {
    if (i > 0 && posNums[i] === posNums[i - 1]) {
      continue;
    }
    const first = posNums[i];
    for (let j = i + 1; j < posNums.length - 2; j++) {
      if (j > i + 1 && posNums[j] === posNums[j - 1]) {
        continue;
      }
      const second = posNums[j];
      let left = j + 1;
      let right = posNums.length - 1;
      while (left < right) {
        const sum = first + second + posNums[left] + posNums[right];
        if (sum === target) {
          res.push([first, second, posNums[left], posNums[right]]);
          while (left < right && posNums[left] === posNums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && posNums[right] === posNums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
}
// @lc code=end

fourSum([2, 2, 2, 2, 2], 8);
