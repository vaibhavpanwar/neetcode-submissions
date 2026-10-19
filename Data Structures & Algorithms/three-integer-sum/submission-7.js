class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let result = [];
        let i = 0;
        while (i < nums.length) {
            let j = i + 1;
            let k = nums.length - 1;

            if (i > 0 && nums[i] === nums[i - 1]) {
                i++;
                continue;
            }

            while (j < k) {
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    j++;
                    continue;
                }
                if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
                    k--;
                    continue;
                }

                let sum = nums[i] + nums[j] + nums[k];
                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                }
            }
            i++;
        }
        return result;
    }
}
