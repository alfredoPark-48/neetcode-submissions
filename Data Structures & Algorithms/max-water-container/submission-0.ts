class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let maxAmount = 0;

        while (l < r) {
            const lowest = Math.min(heights[l], heights[r]);
            const area = (r - l) * lowest;
            maxAmount = Math.max(area, maxAmount);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxAmount;
    }
}
