class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({ length: n }, () => 1);
        for (let r = m - 2; r >= 0; r--) {
            for (let c = n - 2; c >= 0; c--) {
                dp[c] = dp[c] + dp[c + 1];
            }
        }
        return dp[0];
    }
}
