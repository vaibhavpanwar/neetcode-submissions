class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let leftSideProductArray = [1];
        let rightSideProductArray = [];
        rightSideProductArray[nums.length-1]=1
        //1,2,3,4,5
        //[1,1,2,6,24]
        for (let i = 1; i < nums.length; i++) {
            leftSideProductArray.push(leftSideProductArray[i - 1] * nums[i - 1]);
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            rightSideProductArray[i] =
                rightSideProductArray[i+1] * nums[i + 1];
        }

        let result = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(leftSideProductArray[i] * rightSideProductArray[i]);
        }
        return result;
    }
}
