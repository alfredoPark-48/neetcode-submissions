const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid: number[][]): number {        
        const numRows = grid.length;
        const numCols = grid[0].length;
        let distance = 0;

        const queue: [number, number][] = [];
        queue.push([0, 0]);
        grid[0][0] = 1;

        while (queue.length > 0) {
            const currSize = queue.length;
            for (let i = 0; i < currSize; i++) {
                const [r, c] = queue.shift()!;

                if (r === numRows - 1 && c === numCols - 1) return distance;

                for (const [dr, dc] of directions) {
                    const newR = dr + r;
                    const newC = dc + c;

                    if (newR >= 0 && newR < numRows && newC >= 0 && newC < numCols && grid[newR][newC] === 0) {
                        grid[newR][newC] = 1;
                        queue.push([newR, newC]);
                    }
                }
            }
            distance++;
        }

        return -1;
    }
}