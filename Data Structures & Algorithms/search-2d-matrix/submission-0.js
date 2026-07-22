class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let L = 0;
        let R = matrix[0]?.length - 1;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i]?.length; i++) {
                while (L <= R) {
                    const mid = L + Math.round((R - L) / 2);
                    if (matrix[i][mid] > target) {
                        R = mid - 1
                    } else if (matrix[i][mid] < target) {
                        L = mid + 1
                    } else {
                        return true;
                    }
                }

                L = 0;
                R = matrix[i].length - 1;
            }
        }

        return false;
    }
}
