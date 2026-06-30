class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        const indexes=[];
        let numRows=matrix.length
        let numCols=matrix[0].length
        for(let row=0;row<numRows;row++){
            for(let col=0;col<numCols;col++){
                if(matrix[row][col]===0) indexes.push([row,col])
            }
        }
        console.log(indexes)
        
        for(let [row,col]of indexes){
         for(let i=0;i<numCols;i++){
            matrix[row][i]=0
         }   
         for(let i=0;i<numRows;i++){
            matrix[i][col]=0
         }   
        }
    }
}
