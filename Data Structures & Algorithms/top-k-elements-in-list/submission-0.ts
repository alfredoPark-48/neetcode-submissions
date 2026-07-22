class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const minHeap = new MinPriorityQueue((item: { num: number; count: number }) => item.count);
        const freq = new Map<number, number>();
        const result = new Array<number>();

        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        for (const [num, count] of freq.entries()) {
            minHeap.enqueue({ num, count });
            if (minHeap.size() > k) {
                minHeap.dequeue();
            }
        }

        while (minHeap.size()) {
            result.push(minHeap.dequeue().num);
        }

        return result;
    }
}
