class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map();
        const freqArr = Array.from({ length: nums.length + 1}, () => []);
        const result = [];

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        for (const [num, c] of count.entries()) {
            const curr = freqArr.at(c);
            if (curr) curr.push(num);
            freqArr[c] = curr;
        }

        for (let i = freqArr.length - 1; i >= 0; i--) {
            const curr = freqArr.at(i);
            for (const num of curr) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}
