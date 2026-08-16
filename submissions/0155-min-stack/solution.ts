class MinStack {
  stack: [value: number, minimumSoFar: number][];
  constructor() {
    this.stack = [];
  }

  push(value: number): void {
    if (this.stack.length === 0) {
      this.stack.push([value, value]);
    } else {
      const [_, minimumSoFar] = this.stack[this.stack.length - 1];
      const minimum = value < minimumSoFar ? value : minimumSoFar;
      this.stack.push([value, minimum]);
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
