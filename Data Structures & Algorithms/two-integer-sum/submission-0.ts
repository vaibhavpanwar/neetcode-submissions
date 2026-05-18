class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
   let seen={};
    let diff;
    for(let i=0;i<nums.length;i++){
         diff= target-nums[i];
         if(seen.hasOwnProperty(diff)){
         return [seen[diff],i]
         }else{
            seen[nums[i]]=i
         }
    }
    return []
    }
}
