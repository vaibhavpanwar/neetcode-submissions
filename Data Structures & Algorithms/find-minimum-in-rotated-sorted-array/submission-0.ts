class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left=0;
        let right=nums.length-1;
        let minValue=nums[left];
        
        while(left<=right){
            let mid=Math.ceil((left+right)/2);
            let midElement= nums[mid];
            minValue=Math.min(minValue, midElement)
            
            if(nums[left]<midElement){
              minValue=Math.min(minValue, nums[left]);
              left=mid+1
            }else{
             right=mid-1
            }
        }

        return minValue
    }
}
