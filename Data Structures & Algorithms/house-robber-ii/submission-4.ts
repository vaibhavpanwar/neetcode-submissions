class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    robDP(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        function helper(arr: number[]) {
            let dp = [];
            dp = [arr[0], Math.max(arr[1] || 0, arr[0])];
            for (let i = 2; i < arr.length; i++) {
                dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
            }
            return dp[arr.length - 1];
        }
        return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));
    }
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        function helper(arr: number[]) {
            let p1 = 0,
                p2 = 0;
            for (let i = 0; i < arr.length; i++) {
                let temp = Math.max(p1 + arr[i], p2);
                p1 = p2;
                p2 = temp;
            }
            return p2;
        }
        return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));
    }
}
