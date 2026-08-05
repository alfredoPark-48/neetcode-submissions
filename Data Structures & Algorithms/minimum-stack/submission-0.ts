class MinStack {
    stack: number[];
    minStack: number[];
    currMin: number;

    constructor() {
        this.stack = [];
        this.minStack = [];
        this.currMin = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        const min = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
