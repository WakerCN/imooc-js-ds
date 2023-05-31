/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack: string[] = [];

  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (char === "[" || char === "{" || char === "(") {
      stack.push(char);
    } else {
      const popChar = stack.pop();
      if (
        !popChar ||
        (popChar === "(" && char !== ")") ||
        (popChar === "[" && char !== "]") ||
        (popChar === "{" && char !== "}")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// @lc code=end

isValid("{[]()}");

export {};
