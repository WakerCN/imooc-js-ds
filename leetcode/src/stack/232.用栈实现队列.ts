/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyStack {
  private stack: number[] = [];

  public push(x: number) {
    this.stack.push(x);
  }

  public pop(): number | null {
    return this.empty() ? null : (this.stack.pop() as number);
  }

  public peek() {
    return this.stack[this.stack.length - 1];
  }

  public empty() {
    return this.stack.length === 0;
  }
}

class MyQueue {
  private stackA = new MyStack();
  private stackB = new MyStack();

  push(x: number): void {
    while (!this.stackA.empty()) {
      this.stackB.push(this.stackA.pop() as number);
    }
    this.stackB.push(x);
    while (!this.stackB.empty()) {
      this.stackA.push(this.stackB.pop() as number);
    }
  }

  pop(): number | null {
    return this.stackA.pop();
  }

  peek(): number | null {
    return this.stackA.peek();
  }

  empty(): boolean {
    return this.stackA.empty();
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(4);
console.log(
  "%c 🍓 myQueue.pop()",
  "font-size:16px;color:#ffffff;background:#95afc0",
  myQueue.pop()
);

export {};
