/*
 * @lc app=leetcode.cn id=859 lang=typescript
 * 
 * [859] 亲密字符串
 * 个人题解：https://leetcode.cn/problems/buddy-strings/solution/859-gen-ju-bu-tong-zi-fu-ge-shu-fen-lei-tloqv/
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  /** 交换字符串位置 */
  const swapChar = (str: string, index1: number, index2: number): string =>
    str.substring(0, index1) +
    str[index2] +
    str.substring(index1 + 1, index2) +
    str[index1] +
    str.substring(index2 + 1);

  /** 字符串中不同字符个数 */
  let diffNum = 0;
  /** 不同字符下标 */
  const indexArr: number[] = [];
  /** 字符出现个数Map */
  const map = new Map();
  /** 是否有相同字符 */
  let sameCharFlag = false;

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const gChar = goal[i];
    if (sChar !== gChar) {
      diffNum++;
      indexArr.push(i);
    }
    const num = map.get(sChar) || 0;
    if (num) {
      sameCharFlag = true;
    }
    map.set(sChar, num + 1);
  }

  if (indexArr.length > 2 || diffNum === 1) {
    return false;
  } else if (indexArr.length === 2) {
    const index1 = indexArr[0];
    const index2 = indexArr[1];
    const swapStr = swapChar(s, index1, index2);
    return swapStr === goal;
  } else {
    return sameCharFlag;
  }
}
// @lc code=end

export {};
