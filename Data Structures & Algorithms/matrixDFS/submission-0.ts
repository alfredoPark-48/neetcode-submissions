const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (grid: number[][], r: number, c: number): number => {
    // IF WE ARE OUT OF BOUNDS RETURN VOID
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 1) return 0;
    
    // IF WE HAVE ARRIVED AT [numRows-1, numCols-1] ADD 1 "STEP";
    if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

    grid[r][c] = 1; // Mark as visited

    let paths = 0;
    for (const [dr, dc] of directions) {
        paths += dfs(grid, r + dr, c + dc);
    }
    grid[r][c] = 0;

    return paths;
}

class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid: number[][]): number {
        return dfs(grid, 0, 0);
    }
}
