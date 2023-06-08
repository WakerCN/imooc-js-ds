/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-06-08 10:49 周4
 * @Description  :
 */
/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyQueue {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  public push(v: number): void {
    this.queue.push(v);
  }

  public peek(): number | null {
    return this.empty() ? null : this.queue[0];
  }

  public pop(): number | null {
    const v = this.peek();
    this.queue.shift();
    return v;
  }

  public empty(): boolean {
    return this.queue.length === 0;
  }
}

class MyStack {
  private queue1 = new MyQueue();
  private queue2 = new MyQueue();

  constructor() {}

  push(x: number): void {
    this.queue2.push(x);
    while (!this.queue1.empty()) {
      this.queue2.push(this.queue1.pop() as number);
    }
    // ----------------------- 交换队列 start ----------------------- //
    let temp;
    temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    // ------------------------ 交换队列 end ------------------------ //
  }

  pop(): number | null {
    return this.queue1.pop();
  }

  top(): number | null {
    return this.queue1.peek();
  }

  empty(): boolean {
    return this.queue1.empty();
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
