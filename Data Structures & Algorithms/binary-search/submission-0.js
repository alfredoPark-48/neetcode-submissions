class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L = 0; 
        let R = nums.length - 1;

        while (L <= R) {
            const mid = L + Math.floor((R - L) / 2);
            if (nums[mid] > target) {
                R = mid - 1; 
            } else if (nums[mid] < target) {
                L = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    iterativeBinarySearch(nums, target) {
        const L = 0;
        const R = nums.length - 1;

        while (L <= R) {
            
        }
    }
}
