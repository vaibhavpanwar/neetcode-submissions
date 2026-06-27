class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        let dp: number[][] = Array.from({ length: text1.length }, () => []);
        function check(i: number, j: number): number {
            if (i >= text1.length || j >= text2.length) return 0;
            if (dp[i][j] !== undefined) return dp[i][j];
            if (text1[i] !== text2[j]) {
                return (dp[i][j] = Math.max(check(i + 1, j), check(i, j + 1)));
            }
            return (dp[i][j] = 1 + check(i + 1, j + 1));
        }
        return check(0, 0);
    }
}
