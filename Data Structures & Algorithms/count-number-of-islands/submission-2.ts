class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslandsWithPath(grid: string[][]): number {
        let totalIslands = 0;
        let path = new Set(); // to track is that piece of land is already used
        // i only care about 1s and not 0s
        // 1 aya or wo path me nahi hai to island plus krdo.
        //
        let numRows = grid.length;
        let numCols = grid[0].length;
        function dfs(r, c) {
            if (
                r < 0 ||
                c < 0 ||
                r >= numRows ||
                c >= numCols ||
                path.has(`${r}-${c}`) ||
                grid[r][c] === "0"
            ) {
                return;
            }
            path.add(`${r}-${c}`);
            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
            return;
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] === "1" && !path.has(`${row}-${col}`)) {
                    totalIslands++;
                    dfs(row, col);
                }
            }
        }

        return totalIslands;
    }

    numIslands(grid: string[][]): number {
        let count = 0;
        let numRows = grid.length,
            numCols = grid[0].length;
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= numRows || c >= numCols || grid[r][c] !== "1") {
                return;
            }
            grid[r][c] = "X";
            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
            return;
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] === "1") {
                    count++;
                    dfs(row, col);
                }
            }
        }

        return count;
    }
}
