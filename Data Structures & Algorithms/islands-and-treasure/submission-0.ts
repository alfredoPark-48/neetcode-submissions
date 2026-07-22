const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const numRow = grid.length;
        const numCol = grid[0].length;
        const INF = 2147483647;
        let treasureCount = 0;

        const queue: number[][] = [];

        for (let r = 0; r < numRow; r++) {
            for (let c = 0; c < numCol; c++) {
                if (grid[r][c] === 0) {
                    treasureCount++;
                    queue.push([r, c]);
                }
            }
        }

        while (queue.length) {
            const currSize = queue.length;
            for (let i = 0; i < currSize; i++) {
                const [r, c] = queue.shift();

                for (const [rd, cd] of directions) {
                    const newRd = r + rd;
                    const newCd = c + cd;

                    if (
                        newRd >= 0 &&
                        newRd < numRow &&
                        newCd >= 0 &&
                        newCd < numCol &&
                        grid[newRd][newCd] === INF
                    ) {
                        grid[newRd][newCd] = grid[r][c] + 1;
                        queue.push([newRd, newCd]);
                    }
                }
            }
        }
    }
}
