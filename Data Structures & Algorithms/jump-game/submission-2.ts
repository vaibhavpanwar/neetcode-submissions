class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let dp=[]
        function check(i: number): boolean {
            let num = nums[i];
            if(dp[i]!==undefined) return dp[i]
            if (i >= nums.length - 1) return true;
            if (num === 0) return false;
            for (let j = i + 1; j <= i + num; j++) {
                if (check(j)) {
                    dp[i]=true
                    return true;
                }
            }
            dp[i]=false
            return false;
        }
        return check(0);
    }
}
