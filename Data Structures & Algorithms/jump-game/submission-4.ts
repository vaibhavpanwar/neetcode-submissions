class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJumpR(nums: number[]): boolean {
        let dp = [];
        function check(i: number): boolean {
            let num = nums[i];
            if (dp[i] !== undefined) return dp[i];
            if (i >= nums.length - 1) return true;
            if (num === 0) return false;
            for (let j = i + 1; j <= i + num; j++) {
                if (check(j)) {
                    dp[i] = true;
                    return true;
                }
            }
            dp[i] = false;
            return false;
        }
        return check(0);
    }
    canJumpDP(nums: number[]): boolean {
        let dp = [];
        dp[nums.length - 1] = true;
        for (let i = nums.length - 2; i >= 0; i--) {
            let value = false;
            for (let j = i + 1; j <= nums[i] + i; j++) {
                if (dp[j]) {
                    value = true;
                    break;
                }
            }
            dp[i] = value;
        }

        return dp[0];
    }
    canJump(nums: number[]): boolean {
        let goal = nums.length - 1;
        for (let i = nums.length - 2; i >= 0; i--) {
         if(nums[i]+i>=goal){goal=i}
        }

        return goal===0;
    }
}
