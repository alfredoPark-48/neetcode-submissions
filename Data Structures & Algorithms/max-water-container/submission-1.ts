class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = -1;
        let l = 0;
        let r = heights.length - 1;
        
        while (l < r) {
            const width = (r - l);
            const height = Math.min(heights[l], heights[r]);
            const area = height * width;
            maxArea = Math.max(area, maxArea);

            if (heights[l] >= heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea;
    }
}
