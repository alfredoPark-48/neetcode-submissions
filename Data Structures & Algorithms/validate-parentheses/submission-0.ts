class Solution {
    parenthesis = new Map(Object.entries({
        '(': ')',
        '{': '}',
        '[': ']'
    }))

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for (const p of s) {
            if (this.parenthesis.has(p)) stack.push(p);
            else {
                const opening = stack[stack.length - 1];
                if (this.parenthesis.get(opening) !== p) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        return stack.length === 0;
    }
}
