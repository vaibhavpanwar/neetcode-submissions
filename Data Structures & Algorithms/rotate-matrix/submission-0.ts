class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotateBrute(matrix: number[][]): void {
        let arra = [];
        let l = matrix.length;
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l; j++) {
                if (!arra[i]) arra[i] = [];
                arra[i][j] = matrix[l - 1 - j][i];
            }
        }
        matrix = arra;
        console.log(matrix);
    }
    rotate(matrix: number[][]): void {
        //Obsevation when we rotate matrix by 90
        // to get the rotated in a new array there is a formulat
        // new[row][col]=matrix[numRows-1-col][row]
        // another observation is when you rotate each col becomes a row but in reverse order
        // so if we could do two steps transpose a matrix(ror become col col become row)
        // and then we reverse each row;

        //transpose
        //diagonal elements are same and we only need to swap one side of diagonal
        let l = matrix.length;
        for (let i = 0; i < l - 1; i++) {
            for (let j = i + 1; j < l; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        for (let row = 0; row < l; row++) {
            let l = 0;
            let r = matrix[row].length - 1;
            while (l < r) {
                [matrix[row][l], matrix[row][r]] = [matrix[row][r], matrix[row][l]];
                l++;
                r--;
            }
        }
    }
}
