class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums: number[], target: number): number {
        let dp = [];
        function check(amount) {
            if (amount === 0) return 1;
            if (amount < 0) return 0;
            if (dp[amount] !== undefined) return dp[amount];
            let totalCombos = 0;

            for (let num of nums) {
                if (num <= amount) {
                    totalCombos += check(amount - num);
                }
            }
            dp[amount] = totalCombos;
            return totalCombos;
        }

        return check(target);
    }
}
