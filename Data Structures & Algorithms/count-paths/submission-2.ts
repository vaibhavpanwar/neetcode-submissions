class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let dp: number[][] = [];
        function check(r, c): number {
            if (r >= m || c >= n) return 0;
            if (dp[r] && dp[r][c] !== undefined) return dp[r][c];
            if (r === m - 1 && c === n - 1) return 1;
            if (r === m - 1) return 1;
            if (c === n - 1) return 1;
            let result = check(r + 1, c) + check(r, c + 1);
            if (!dp[r]) dp[r] = [];
            dp[r][c] = result;
            return result;
        }
        return check(0, 0);
    }
}
