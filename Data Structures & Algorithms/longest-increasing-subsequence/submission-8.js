class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = [];
        function check(i) {
            let seq = 1;
            if (dp[i]) return dp[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    seq = Math.max(1 + check(j), seq);
                }
            }
            dp[i] = seq;
            return seq;
        }
        let max = 1;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(max, check(i));
        }
        return max;
    }
}
