class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let dp = Array.from({ length: text1.length }, () => []);

        function check(i, j) {
            if (dp[i]?.[j]) return dp[i][j];
            if (i === text1.length || j === text2.length) {
                return 0;
            }
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + check(i + 1, j + 1);
                return dp[i][j];
            }
            return (dp[i][j] = Math.max(check(i + 1, j), check(i, j + 1)));
            return dp[i][j];
        }
        return check(0, 0);
    }
}
