class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequenceR(text1: string, text2: string): number {
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
    longestCommonSubsequence(text1: string, text2: string): number {
        let dp: number[][] = Array.from({ length: text1.length+1 }, () => Array(text2.length+1).fill(0));
        for (let i = text1.length - 1; i >= 0; i--) {
            for (let j = text2.length - 1; j >= 0; j--) {
                if (text1[i] !== text2[j]) {
                    // pick from next char from either string
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
                } else {
                    //diagonal pic
                    dp[i][j] = 1 + dp[i + 1][j + 1];
                }
            }
        }

        return dp[0][0];
    }
}
