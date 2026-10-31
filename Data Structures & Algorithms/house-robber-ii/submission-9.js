class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function robi(nums) {
            let m1 = 0,
                m2 = 0;
            for (let num of nums) {
                let temp = Math.max(m1 + num, m2);
                m1 = m2;
                m2 = temp;
            }
            return m2;
        }
        if (nums.length === 1) return nums[0];
        return Math.max(robi(nums.slice(1)), robi(nums.slice(0, nums.length - 1)));
    }
}
