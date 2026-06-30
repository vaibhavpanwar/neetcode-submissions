class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroesBrute(matrix: number[][]): void {
        const indexes = [];
        let numRows = matrix.length;
        let numCols = matrix[0].length;
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (matrix[row][col] === 0) indexes.push([row, col]);
            }
        }

        for (let [row, col] of indexes) {
            for (let i = 0; i < numCols; i++) {
                matrix[row][i] = 0;
            }
            for (let i = 0; i < numRows; i++) {
                matrix[i][col] = 0;
            }
        }

        // SC--> O(M*N)
        // TC--> O(M*N*K) --> K is zero indexesnumber worst case O(N^3)
    }
    setZeroesBetter(matrix: number[][]): void {
        const rows = new Set<number>();
        const cols = new Set<number>();
        let numRows = matrix.length;
        let numCols = matrix[0].length;
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (matrix[row][col] === 0) {
                    rows.add(row);
                    cols.add(col);
                }
            }
        }
        for (let row of rows) {
            for (let c = 0; c < numCols; c++) {
                matrix[row][c] = 0;
            }
        }

        for (let col of cols) {
            for (let r = 0; r < numRows; r++) {
                matrix[r][col] = 0;
            }
        }
        //SC --> O(M+N)
        //T-> O(MN)
    }
    setZeroes(matrix: number[][]): void {
        //lets try to do it in 1 space
        // we will use matrix first row to marks columns
        // and we will use matrix first colr to marks rows
        // for for collision i wil seperate oo for columns to seperate variable c0
        let numRows = matrix.length;
        let numCols = matrix[0].length;
        let c0 = 1;
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (matrix[row][col] === 0) {
                    // mark row
                    matrix[row][0] = 0;
                    // since column is seperate we cant do it for first column else it will collide
                    if (col > 0) matrix[0][col] = 0;
                    else c0 = 0;
                }
            }
        }

        // marking is done lets get the nonnmarked value settled
        for (let row = 1; row < numRows; row++) {
            for (let col = 1; col < numCols; col++) {
                if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                    matrix[row][col] = 0;
                }
            }
        }
        // we will change the col tracker first because if we change row tracker it will affect matrix
        if (matrix[0][0] === 0) {
            // make first row zero
            for (let i = 0; i < numCols; i++) {
                matrix[0][i] = 0;
            }
        }
        if (c0 === 0) {
            // make col row zero
            for (let i = 0; i < numRows; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
