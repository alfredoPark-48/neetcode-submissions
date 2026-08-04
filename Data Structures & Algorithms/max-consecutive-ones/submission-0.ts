class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxResult = 0;
        let result = 0;
        for (const num of nums) {
            if (num === 1) {
                result++;
                maxResult = Math.max(result, maxResult);
            } else {
                result = 0;
            }
        }
        return maxResult;
    }
}
