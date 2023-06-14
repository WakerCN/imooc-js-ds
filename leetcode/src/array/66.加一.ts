/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// function plusOne(digits: number[]): number[] {
//   const sum = digits.reduce((pre, cur, index) => {
//     return (pre += cur * Math.pow(10, digits.length - index - 1));
//   }, 0);
//   return [...(sum + 1).toString()].map((str) => Number(str));
// }

// @lc code=start
function plusOne(digits: number[]): number[] {
  /** 找到右边第一个不是9的 */
  const findRightFirstNot9 = (digits: number[]): number => {
    let point = digits.length - 1;
    while (digits[point] === 9) {
      point--;
    }
    return point;
  };

  const point = findRightFirstNot9(digits);

  if (point === -1) {
    return [1, ...new Array(digits.length).fill(0)];
  } else if (point >= 0 && point < digits.length - 1) {
    let res = [...digits.slice(0, point + 1)];
    res[res.length - 1]++;
    return [...res, ...new Array(digits.length - 1 - point).fill(0)];
  } else if (point === digits.length - 1) {
    digits[digits.length - 1]++;
    return digits;
  } else {
    return digits;
  }
}
// @lc code=end

const res = plusOne([8, 9, 9, 9]);

console.log(
  "%c 🍩 res",
  "font-size:16px;color:#ffffff;background:#4834d4",
  res
);

export {};
