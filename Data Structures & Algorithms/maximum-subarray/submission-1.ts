class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum=nums[0]
        for(let i=0;i<nums.length;i++){
            let sum=nums[i]
            for(let j=i+1;j<nums.length;j++){
                sum+=nums[j];
                maxSum=Math.max(sum,maxSum,nums[j])
            }
        }
        return maxSum
    }
}
