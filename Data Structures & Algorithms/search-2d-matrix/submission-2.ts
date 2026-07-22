class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch(arr, target): boolean {
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (arr[mid] === target) return true;
            if (target > arr[mid]) l = mid + 1;
            else r = mid -1;
        }

        return false;
    }

    searchMatrix(matrix: number[][], target: number): boolean {
        for (let r = 0; r < matrix.length; r++) {
            const found = this.binarySearch(matrix[r], target);
            if (found) return true;
        }
        return false;
    }
}
