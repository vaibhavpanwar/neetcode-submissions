class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArrayKadane(nums: number[]): number {
        let currSum = nums[0];
        let max = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(currSum + nums[i], nums[i]);
            max = Math.max(max, currSum);
        }
        return max;
    }
    maxSubArray(nums: number[]): number {
        let dp = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        }
        // dp[i] represent max sub array length ending at index 
        return Math.max(...dp)
    }
}
