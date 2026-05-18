class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
    let results: number[] = [];
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        results[i] = prefix;
        prefix *= nums[i]
    }
    let postFix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        results[i] *= postFix;
        postFix *= nums[i]

    }

    return results;
    }
}
