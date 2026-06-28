class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currSum = nums[0];
        let max = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(currSum + nums[i], nums[i]);
            max = Math.max(max, currSum);
        }
        return max;
    }
}
