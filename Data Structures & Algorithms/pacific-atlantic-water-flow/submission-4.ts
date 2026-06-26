class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
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
}
