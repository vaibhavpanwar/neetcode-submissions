class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        if(nums.length===1) return nums[0]
        let maxProduct=-Infinity;
        let prev=1
        for(let i=0;i<nums.length;i++){
            for(let j=i;j<nums.length;j++){
            if(i===j)prev=nums[i]*1;
            else{
                prev*=nums[j]
            }
            maxProduct=Math.max(maxProduct, prev)
            }
        }
        return maxProduct;
    }
}
