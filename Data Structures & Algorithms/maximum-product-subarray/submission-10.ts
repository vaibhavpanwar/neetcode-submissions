class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductBrute(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        let maxProduct = -Infinity;
        let prev = 1;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                if (i === j) prev = nums[i] * 1;
                else {
                    prev *= nums[j];
                }
                maxProduct = Math.max(maxProduct, prev);
            }
        }
        return maxProduct;
    }
    // for negative numbers we will store the currentMin and currentMax so we can use either of these to recompute the value
    //[-1,-2,-3] -> currMin=-1, curraMax=-1, currMin=-2, currMax=2, currMin, -6, currMax=6 for zero we will reset currentMax
     maxProduct(nums: number[]): number {
     let max=Math.max(...nums);
     let currMin=1,currMax=1
     for(let num of nums){
        if(num===0) {
            currMin=1;
            currMax=1;
            continue
        }
      let temp=currMax
       currMax= Math.max(num* currMax, num*currMin, num);
       currMin= Math.min(num* temp, num*currMin, num);
       max=Math.max(currMin, currMax,max)
     }

     return max

    }
}
