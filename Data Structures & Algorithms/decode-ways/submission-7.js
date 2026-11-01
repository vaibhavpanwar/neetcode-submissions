class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        ///check i will return number of possible decodings possible from givven index
        let dp = [];
        function check(i) {
            if (i === s.length) return 1;
            if (dp[i] !== undefined) return dp[i];
            if (s[i] === "0") return 0;
            let ways = check(i + 1);
            if (i + 1 < s.length) {
                let secondNum = Number(s[i] + s[i + 1]);
                if (secondNum >= 10 && secondNum < 27) {
                    ways += check(i + 2);
                }
            }
            dp[i] = ways;
            return ways;
        }

        return check(0);
    }
}
