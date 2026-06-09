class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        let numRows = board.length;
        let numCols = board[0].length;
        let path = new Set(); // to only visit one node in current path once (two nodes could be neighbour of different elements)
        function dfs(r: number, c: number, i: number): boolean {
            if (i === word.length) return true;
            if (
                r < 0 ||
                r >= numRows ||
                c < 0 ||
                c >= numCols ||
                word[i] !== board[r][c] ||
                path.has(`${r}-${c}`)
            ) {
                return false;
            }
            // check for adjacent neighbours
            path.add(`${r}-${c}`);
            let res =
                dfs(r - 1, c, i + 1) ||
                dfs(r + 1, c, i + 1) ||
                dfs(r, c - 1, i + 1) ||
                dfs(r, c + 1, i + 1);

            // clearing up path before going for next iteration
            path.delete(`${r}-${c}`);
            return res;
        }

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (dfs(row, col, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
