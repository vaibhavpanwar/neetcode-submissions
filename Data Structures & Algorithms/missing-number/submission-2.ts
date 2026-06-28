class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber1(nums: number[]): number {
        let s = new Set(nums);
        for (let i = 0; i <= s.size; i++) {
            if (!s.has(i)) return i;
        }
        //O(N) sc and tc
    }
    missingNumber(nums: number[]): number {
        // zor operator two same number cancels out and 0 xor anynnumber is number itself
        // we do xor or one array and do zor of another array and then xor both
        let xor = 0;
        let l = nums.length;
        for (let i = 0; i <= l; i++) {
            xor = xor ^ i;
        }
        for (let i = 0; i < l; i++) {
            xor = xor ^ nums[i];
        }
        return xor;
    }
    missingNumber2(nums: number[]): number {
        let s = new Set(nums);
        for (let i = 0; i <= s.size; i++) {
            if (!s.has(i)) return i;
        }
        //O(N) sc and tc
    }
    missingNumber3(nums: number[]): number {
        let s = new Set(nums);
        for (let i = 0; i <= s.size; i++) {
            if (!s.has(i)) return i;
        }
        //O(N) sc and tc
    }
}
