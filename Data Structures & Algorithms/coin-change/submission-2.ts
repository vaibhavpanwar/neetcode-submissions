class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChangeBrute(coins: number[], amount: number): number {
        let minWays = -1;
        function check(i: number, target: number, numElements: number) {
            if (i === coins.length) {
                if (target === 0) {
                    if (minWays === -1) {
                        minWays = numElements;
                    } else {
                        minWays = Math.min(minWays, numElements);
                    }
                }
                return;
            }
            if (coins[i] <= target) {
                //pick
                check(i, target - coins[i], numElements + 1);
            }
            check(i + 1, target, numElements);
        }
        check(0, amount, 0);
        return minWays;
    }
    coinChange(coins: number[], amount: number): number {
        let dp = [];
        function check(target: number) {
            if (target === 0) return 0;
            // can not continue down this path
            if (target < 0) return Infinity;

            if (dp[target] !== undefined) return dp[target];
            let minWays=Infinity
            for (let coin of coins) {
                // 1(for using the current coin) + checking for the remaining value 
                minWays=Math.min(minWays, 1 + check(target-coin))
            }
            dp[target]=minWays;
            return minWays;
        }
      
        return check(amount)===Infinity? -1: check(amount);

        // O(M*N) --> M is target N is length of coints array
        // O(M) m is amount
    }
}
