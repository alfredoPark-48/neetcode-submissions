const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const queue = new Queue();
        const numRows = grid.length;
        const numCols = grid[0].length;
        let total = 0;
        let minutes = 0;

        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                if (grid[r][c] === 2) queue.enqueue([r, c]);
                if (grid[r][c] === 1) total++;
            }
        }

        while (queue.size() && total > 0) {
            const currSize = queue.size()
            for (let i = 0; i < currSize; i++) {
                const [r, c] = queue.dequeue();
                for (const [rd, cd] of directions) {
                    const newRd = r + rd;
                    const newCd = c + cd;
                    if (newRd >= 0 && newRd < numRows && newCd >= 0 && newCd < numCols && grid[newRd][newCd] === 1) {
                        grid[newRd][newCd] = 2;
                        total--;
                        queue.enqueue([newRd, newCd]);
                    }
                }
            }
            minutes++;
        }

        return total === 0 ? minutes : -1;
    }
}
