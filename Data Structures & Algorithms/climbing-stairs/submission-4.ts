class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let dp = [];
        //bottom up DP (tabulation) start with base case and work your way up
        // top up memorization --> find answer to common sub problems at top level and reuse when they repear
        function count(num) {
            if (num <= 1) return 1;
            if (num > n) return 1;
            if (dp[num]) return dp[num];
            let ways = count(num - 1) + count(num - 2);
            dp[num] = ways;
            return dp[num];
        }
        return count(n);
    }
    climbStairsDP(n: number): number {
        let p1 = 1,
            p2 = 1,
            current = 1;
        // bottoms up start with bottom (base case and move all the way to top)
        for (let i = 2; i <= n; i++) {
            current = p1 + p2;
            p1 = p2;
            p2 = current;
        }
        return current;
    }
}
