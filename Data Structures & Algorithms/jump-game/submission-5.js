class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goodIndex = nums.length - 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            if (nums[i] + i >= goodIndex) {
                goodIndex = i;
            }
        }

        return goodIndex === 0;
    }
}
