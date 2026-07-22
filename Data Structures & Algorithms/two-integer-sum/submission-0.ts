class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        const result = new Array<number>();

        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            const diff = target - nums[i];
            if (map.has(curr)) {
                return [map.get(curr), i];
            } else {
                map.set(diff, i);
            }
        }

        return result;
    }
}
