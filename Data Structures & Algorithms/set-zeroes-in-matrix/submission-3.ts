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
    setZeroes(matrix: number[][]): void {
        const rows=new Set<number>();
        const cols=new Set<number>();
        let numRows = matrix.length;
        let numCols = matrix[0].length;
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (matrix[row][col] === 0){
                    rows.add(row)
                    cols.add(col)
                }
            }
        }
      for(let row of rows){
        for(let c=0;c<numCols;c++){
            matrix[row][c]=0
        }
      }
      
      for(let col of cols){
        for(let r=0;r<numRows;r++){
            matrix[r][col]=0
        }
      }
    }

}
