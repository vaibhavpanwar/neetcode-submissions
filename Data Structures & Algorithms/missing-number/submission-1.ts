class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let s=new Set(nums);
        for(let i=0;i<=s.size;i++){
            if(!s.has(i))return i
        }
        
    }
}
 