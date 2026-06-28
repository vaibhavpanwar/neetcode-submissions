class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        function check(i: number): boolean {
            let num = nums[i];
            console.log(num);
            if (i >= nums.length - 1) return true;
            if (num === 0) return false;
            for (let j = i+1; j <= i+num; j++) {
                if (check(j)) {
                    return true;
                }
            }
            return false;
        }
        return check(0);
    }
}
