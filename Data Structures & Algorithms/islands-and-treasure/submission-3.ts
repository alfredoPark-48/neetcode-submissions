class Solution {
    /**
     * @param {number[][]} grid
     */
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    INF = 2147483647;

    islandsAndTreasure(grid: number[][]): void {
        const numRows = grid.length;
        const numCols = grid[0].length;
        const queue = new Queue();

        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                if (grid[r][c] === 0) queue.enqueue([r, c]);
            }
        }
        
        while (queue.size()) {
            const currSize = queue.size();
            for (let i = 0; i < currSize; i++) {
                const [r, c] = queue.dequeue();
                for (const [rd, cd] of this.directions) {
                    const newRd = r + rd;
                    const newCd = c + cd;

                    if (newRd >= 0 && newRd < numRows && newCd >= 0 && newCd < numCols && grid[newRd][newCd] === this.INF) {
                        grid[newRd][newCd] = grid[r][c] + 1;
                        queue.enqueue([newRd, newCd]);
                    }
                }
            }
        }
    }
}
