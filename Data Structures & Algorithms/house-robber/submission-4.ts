class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    robDP(nums: number[]): number {
        let num1 = 0,
            num2 = 0;
        // we can store at each position what is the maximum total sum we can rob so far
        // at 1 we can only rob 1 so thats the max
        // at 2 we can either use 2 or we could use the previous max
        // now at 3 we can either use 1 plus 3 or use rob 2 whicever is maximum
        /*
[2,9,8,3,6]
[2,9,(8+2 or 9)10, (9+3 or 10)12, (10+6) or 12  ]
//dp[i]=Math.max(dp[i-2]+nums[i], dp[i-1])

*/
        if (nums.length <= 2) return Math.max(nums[0], nums[1] || 0);
        let dp = [nums[0], Math.max(nums[0], nums[1])];
        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }
        return dp[nums.length - 1];
    }
    rob(nums: number[]): number {
        let num1 = 0,
            num2 = 0;

        for (let i = 0; i < nums.length; i++) {
            let temp = Math.max(num1 + nums[i], num2);
            num1 = num2;
            num2 = temp;
        }
        return num2;
    }
}
