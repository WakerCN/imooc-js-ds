/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  const charArr = [...path];
  const stack: string[] = [];
  for (let i = 0; i < charArr.length; i++) {
    const char = charArr[i];
    if (char === "/" && stack.length && stack[stack.length - 1] === "/") {
      continue;
    } else if (char === ".") {
      if (charArr[i + 1] !== ".") {
        // 如果是一个.
        continue;
      } else {
        // 两个.
        stack.pop();
        if (!stack.length) {
          continue;
        }
        while (stack[stack.length - 1] !== "/") {
          stack.pop();
        }
      }
    } else {
      stack.push(char);
    }
  }
  if (stack.length > 1 && stack[stack.length - 1] === "/") {
    stack.pop();
  }
  if (!stack.length) {
    stack.push("/");
  }
  return stack.join("");
}
// @lc code=end

let res = simplifyPath("/../");

console.log(
  "%c 🥟 res",
  "font-size:16px;color:#ffffff;background:#7ed6df",
  res
);

export {};
