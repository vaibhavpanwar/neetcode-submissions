class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        let left = 0,
            top = 0;
        let result = [];
        let right = matrix[0].length - 1,
            bottom = matrix.length - 1;
        //l->r , t-b, r-l, b-t
        while (left <= right && top <= bottom) {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;

            if (bottom >= top) {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
            }

            if (right >= left) {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++;
            }
        }
        return result
    }
}
