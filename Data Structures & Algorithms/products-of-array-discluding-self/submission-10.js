class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let prefix = 1;
        let postfix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;

            prefix = prefix * nums[i];
        }
        console.log(result);
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * postfix;

            postfix = postfix * nums[i];
        }
        return result;
    }
}
