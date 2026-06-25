class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        // brrute
        // har ek element se dekhte hain vroo
        let dp=[]
        function check(i) {
            if(dp[i]!==undefined)return dp[i]
            let max = 1;
            // each element is a increasing subsequence
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j]> nums[i]){
                    max=Math.max(max, 1+check(j))
                };
               
            }
            dp[i]=max;
            return max;
        }
        let max=0
        for(let i=0;i<nums.length;i++){
            max=Math.max(max, check(i))
        }
        return max
    }
}
