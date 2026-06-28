class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum = nums[0];
        let globalMaxSum=nums[0]
        // let sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            // sum+=nums[i]
            maxSum = Math.max(maxSum+nums[i], nums[i]);
            globalMaxSum=Math.max(globalMaxSum,maxSum)
        }
        return globalMaxSum;
    }
}
