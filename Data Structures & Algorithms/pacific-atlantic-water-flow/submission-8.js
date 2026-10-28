class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let numRows = heights.length;
        let numCols = heights[0].length;
        let a = new Set();
        let p = new Set();

        function dfs(r, c, set, currentHeight) {
            if (
                r < 0 ||
                c < 0 ||
                r >= numRows ||
                c >= numCols ||
                currentHeight > heights[r][c] ||
                set.has(`${r}-${c}`)
            ) {
                return;
            }
            set.add(`${r}-${c}`);
            dfs(r + 1, c, set, heights[r][c]);
            dfs(r - 1, c, set, heights[r][c]);
            dfs(r, c + 1, set, heights[r][c]);
            dfs(r, c - 1, set, heights[r][c]);
        }

        for (let r = 0; r < numRows; r++) {
            dfs(r, 0, p, heights[r][0]);
            dfs(r, numCols - 1, a, heights[r][numCols - 1]);
        }
        for (let c = 0; c < numCols; c++) {
            dfs(0, c, p, heights[0][c]);
            dfs(numRows - 1, c, a, heights[numRows - 1][c]);
        }

        let result = [];
        for (let co of a) {
            if (p.has(co)) {
                result.push(co.split("-").map(Number));
            }
        }

        return result;
    }
}
