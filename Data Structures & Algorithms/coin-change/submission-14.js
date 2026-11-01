class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = [];
        //check amount will give for a given amount how many ways to complete amount
        function check(amount) {
            if (amount === 0) return 0;
            if (amount < 0) return Infinity;
            if (dp[amount] !== undefined) return dp[amount];
            let ways = Infinity;
            for (let coin of coins) {
                let remaining = amount - coin;
                ways = Math.min(ways, 1 + check(remaining));
            }
            dp[amount] = ways;
            return ways;
        }
        let res = check(amount);
        return res === Infinity ? -1 : res;
    }
}
