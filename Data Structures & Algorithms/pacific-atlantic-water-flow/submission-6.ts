class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantics(heights: number[][]): number[][] {
        /// reverse lets check ocean and atlantic can pull water from what source and then find their intersection;
        let aSet = new Set<string>();
        let pSet = new Set<string>();
        let numRows = heights.length,
            numCols = heights[0].length;
        function dfs(r: number, c: number, path: Set<string>, currentHeight: number) {
            if (
                r < 0 ||
                c < 0 ||
                r >= numRows ||
                c >= numCols ||
                path.has(`${r}-${c}`) ||
                currentHeight > heights[r][c]
            ) {
                return;
            }
            //
            path.add(`${r}-${c}`);
            currentHeight = heights[r][c];
            dfs(r - 1, c, path, currentHeight);
            dfs(r + 1, c, path, currentHeight);
            dfs(r, c - 1, path, currentHeight);
            dfs(r, c + 1, path, currentHeight);
            return;
        }
        for (let r = 0; r < numRows; r++) {
            dfs(r, 0, pSet, heights[r][0]);
            dfs(r, numCols - 1, aSet, heights[r][numCols - 1]);
        }
        for (let c = 0; c < numCols; c++) {
            dfs(0, c, pSet, heights[0][c]);
            dfs(numRows - 1, c, aSet, heights[numRows - 1][c]);
        }
        let result = [];
        for (let cords of aSet) {
            if (aSet.has(cords) && pSet.has(cords)) {
                let arr = cords.split("-");
                result.push([Number(arr[0]), Number(arr[1])]);
            }
        }
        return result;
    }
    pacificAtlantic(heights: number[][]): number[][] {
        let matrix = heights;
        let p = new Set<string>();
        let a = new Set<string>();
        let numRows = matrix.length,
            numCols = matrix[0].length;
        function dfs(r, c, set, currentHeight) {
            if (
                r < 0 ||
                c < 0 ||
                r >= numRows ||
                c >= numCols ||
                set.has(`${r}-${c}`) ||
                currentHeight > matrix[r][c]
            )
                return;
            set.add(`${r}-${c}`);
            dfs(r + 1, c, set, matrix[r][c]);
            dfs(r - 1, c, set, matrix[r][c]);
            dfs(r, c + 1, set, matrix[r][c]);
            dfs(r, c - 1, set, matrix[r][c]);
        }

        //atlannic
        for (let r = 0; r < numRows; r++) {
            dfs(r, 0, a, matrix[r][0]);
            dfs(r, numCols - 1, p, matrix[r][numCols - 1]);
        }
        for (let c = 0; c < numCols; c++) {
            dfs(0, c, a, matrix[0][c]);
            dfs(numRows - 1, c, p, matrix[numRows - 1][c]);
        }
        let result = [];
        for (let c of a) {
            if (p.has(c)) {
                let [row, col] = c.split("-");
                result.push([Number(row), Number(col)]);
            }
        }
        return result;
    }
}
