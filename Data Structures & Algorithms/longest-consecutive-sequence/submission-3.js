class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutiveBrute(nums) {
        if (!nums.length) return 0;
        nums = nums.sort((a, b) => a - b);
        let longestCounter = 1;
        let currentCounter = 1;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] === 0) continue;
            if (nums[i + 1] - nums[i] === 1) currentCounter++;
            else {
                currentCounter = 1;
            }
            longestCounter = Math.max(currentCounter, longestCounter);
        }
        return longestCounter;
    }
    longestConsecutive(nums) {
        let counter = 0;
        // lets create set to contain all non repeating elements
        const numSet = new Set(nums);
        /*
    now assume we have [2,3,4,66,88,99,100]
    there is no point of starting counters for 3,4,99 as their preceding elements exists 
    n-1 exists for an element we dont need to check for it

    */

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentCounter = 1;

                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentCounter++;
                }
                counter = Math.max(currentCounter, counter);
            }
        }

        return counter;
    }
}
