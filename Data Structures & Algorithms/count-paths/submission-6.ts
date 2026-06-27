class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePathsRecuriveTopDown(m: number, n: number): number {
        let dp: number[][] = [];
        function check(r, c): number {
            if (r >= m || c >= n) return 0;
            if (dp[r] && dp[r][c] !== undefined) return dp[r][c];
            if (r === m - 1 || c === n - 1) return 1;
            let result = check(r + 1, c) + check(r, c + 1);
            if (!dp[r]) dp[r] = [];
            dp[r][c] = result;
            return result;
        }
        return check(0, 0);
    }
    // O(M*N)
    // O(M*N)
    uniquePathsDP2D(m: number, n: number): number {
        let dp: number[][] = [];
        for (let r = m - 1; r >= 0; r--) {
            for (let c = n - 1; c >= 0; c--) {
                if (!dp[r]) dp[r] = [];
                if (r >= m || c >= n || r === m - 1 || c === n - 1) {
                    dp[r][c] = 1;
                    continue;
                }
                dp[r][c] = dp[r + 1][c] + dp[r][c + 1];
            }
        }
        return dp[0][0];
    }
    // O(M*N)
    // O(M*N)
        uniquePaths(m: number, n: number): number {
        let dp: number[]=Array.from({length:n},()=> 1)
        for (let r = m - 2; r >= 0; r--) {
            // last col is always gunna be zero and last row is always gunna be zero
            for (let c = n - 2; c >= 0; c--) {
              dp[c]=dp[c+1]+dp[c]
            }
        }
        return dp[0];
    }
}
