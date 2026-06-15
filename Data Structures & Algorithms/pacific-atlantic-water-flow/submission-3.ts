class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlanticBrute(heights: number[][]): number[][] {
        let pacificSet = new Set<string>();
        let atlanticSet = new Set<string>();
        let numRows = heights.length;
        let numCols = heights[0].length;

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (row === 0 || col === 0) {
                    pacificSet.add(`${row}-${col}`);
                }
                if (row === numRows - 1 || col === numCols - 1) {
                    atlanticSet.add(`${row}-${col}`);
                }
            }
        }

        function check(
            r: number,
            c: number,
            currPath: Set<string>,
            currValue: number,
            forAtlantic: boolean,
        ): boolean {
            if (
                r < 0 ||
                c < 0 ||
                c >= numCols ||
                r >= numRows ||
                currValue < heights[r][c] ||
                currPath.has(`${r}-${c}`)
            ) {
                return false;
            }
            if (forAtlantic ? atlanticSet.has(`${r}-${c}`) : pacificSet.has(`${r}-${c}`))
                return true;
            currPath.add(`${r}-${c}`);
            let res =
                check(r - 1, c, currPath, heights[r][c], forAtlantic) ||
                check(r + 1, c, currPath, heights[r][c], forAtlantic) ||
                check(r, c - 1, currPath, heights[r][c], forAtlantic) ||
                check(r, c + 1, currPath, heights[r][c], forAtlantic);
            currPath.delete(`${r}-${c}`);
            return res;
        }

        let results: number[][] = [];

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (
                    check(row, col, new Set(), Infinity, false) &&
                    check(row, col, new Set(), Infinity, true)
                )
                    results.push([row, col]);
            }
        }

        return results;
    }

    pacificAtlantic(heights: number[][]): number[][] {
        let results: number[][] = [];
        let pacific = new Set<string>();
        let atlanitc = new Set<string>();
        let numRows = heights.length,
            numCols = heights[0].length;

        function dfs(row: number, col: number, path: Set<string>, currentHeight: number) {
            if (
                path.has(`${row}-${col}`) ||
                row < 0 ||
                row >= numRows ||
                col < 0 ||
                col >= numCols ||
                heights[row][col] < currentHeight
            ) {
                return;
            }
            path.add(`${row}-${col}`);
            currentHeight = heights[row][col];
            dfs(row - 1, col, path, currentHeight);
            dfs(row + 1, col, path, currentHeight);
            dfs(row, col + 1, path, currentHeight);
            dfs(row, col - 1, path, currentHeight);
        }

        for (let c = 0; c < numCols; c++) {
            dfs(0, c, pacific, heights[0][c]);
            dfs(numRows - 1, c, atlanitc, heights[numRows - 1][c]);
        }
        for (let r = 0; r < numRows; r++) {
            dfs(r, 0, pacific, heights[r][0]);
            dfs(r, numCols - 1, atlanitc, heights[r][numCols - 1]);
        }

        for (let key of pacific) {
            if (atlanitc.has(key)) {
                let [r, c] = key.split("-").map(Number);
                results.push([r, c]);
            }
        }
        return results;
    }
}
