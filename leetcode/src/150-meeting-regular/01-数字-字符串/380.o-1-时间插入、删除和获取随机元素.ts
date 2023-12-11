/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
  private innerSet: Set<number>;

  constructor() {
    this.innerSet = new Set();
  }

  insert(val: number): boolean {
    if (!this.innerSet.has(val)) {
      this.innerSet.add(val);
      return true;
    } else {
      return false;
    }
  }

  remove(val: number): boolean {
    if (this.innerSet.has(val)) {
      this.innerSet.delete(val);
      return true;
    } else {
      return false;
    }
  }

  getRandom(): number {
    const arr: number[] = Array.from(this.innerSet);
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
