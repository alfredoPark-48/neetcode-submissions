class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currSum = 0;
        let maxSum = nums[0];

        for (const n of nums) {
            currSum = Math.max(currSum, 0);
            currSum += n;
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
}
