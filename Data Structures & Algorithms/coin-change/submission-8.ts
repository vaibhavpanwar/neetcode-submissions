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
    coinChangeRecusrsion(coins: number[], amount: number): number {
        let dp = [];
        function check(target: number) {
            if (target === 0) return 0;
            // can not continue down this path
            if (target < 0) return Infinity;

            if (dp[target] !== undefined) return dp[target];
            let minWays = Infinity;
            for (let coin of coins) {
                // 1(for using the current coin) + checking for the remaining value
                minWays = Math.min(minWays, 1 + check(target - coin));
            }
            dp[target] = minWays;
            return minWays;
        }

        return check(amount) === Infinity ? -1 : check(amount);

        // O(M*N) --> M is target N is length of coints array
        // O(M) m is amount
    }
    coinChange1(coins: number[], amount: number): number {
        let dp = new Array(amount + 1).fill(amount + 1);
        dp[0] = 0;
        // we need zero coints to complete sum of zero
        for (let i = 1; i <= amount; i++) {
            for (let c of coins) {
                // hr ek coin k lye value compute kr rhe hain
                let remainingAmount = i - c;
                if (remainingAmount >= 0) {
                    dp[i] = Math.min(1 + dp[remainingAmount], dp[i]);
                }
            }
        }
        return dp[amount] === amount + 1 ? -1 : dp[amount];
        // O(M*N) --> M is target N is length of coints array
        // O(M) m is amount
    }
    coinChange(coins: number[], amount: number): number {
        let dp = [0];
        // i represent amount
        function check(amount) {
            if (amount === 0) return 0;
            if (amount < 0) return Infinity;
            if (dp[amount] !== undefined) return dp[amount];

            let minWays = Infinity;

            for (let c of coins) {
                let remainingAmount = amount - c;
                minWays = Math.min(1 + check(remainingAmount), minWays);
            }
            dp[amount] = minWays;
            return minWays;
        }
        let ways = check(amount);
        return ways === Infinity ? -1 : ways;
    }
}
