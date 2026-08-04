class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map();
        const heap = new MinPriorityQueue((e) => e.count);

        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        for (const [num, count] of frequency.entries()) {
            heap.enqueue({ num, count });
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        return heap.toArray().map((e) => e.num);
    }
}
