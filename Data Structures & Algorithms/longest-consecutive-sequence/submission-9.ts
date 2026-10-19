class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let numNum = new Set(nums);
        let maxCount = 0;
        for (let num of numNum) {
            if (!numNum.has(num - 1)) {
                let current = 1;
                let n = num;
                while (numNum.has(n + 1)) {
                    current++;
                    n++;
                }
                maxCount = Math.max(current, maxCount);
            }
        }
        return maxCount;
    }
}
