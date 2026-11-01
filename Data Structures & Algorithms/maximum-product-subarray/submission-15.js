class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = Math.max(...nums);
        let prevMax = 1,
            prevMin = 1;
        for (let num of nums) {
            if (num === 0) {
                prevMax = 1;
                prevMin = 1;
                continue;
            }
            let temp = prevMax;
            prevMax = Math.max(prevMax * num, prevMin * num, num);
            prevMin = Math.min(temp * num, prevMin * num, num);
            max = Math.max(prevMax, prevMin, max);
        }
        return max;
    }
}
