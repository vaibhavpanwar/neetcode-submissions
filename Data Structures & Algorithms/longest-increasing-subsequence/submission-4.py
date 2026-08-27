class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        maxLen=0
        dp=[None]*len(nums)

        def check(j):
            if dp[j] is not None: return dp[j]

            local_max=1
            for i in range(j+1,len(nums)):
                if nums[i]> nums[j]:
                    local_max=max(1+check(i),local_max)
            dp[j]=local_max
            return local_max
        
        for i in range(0,len(nums)):
            maxLen=max(check(i), maxLen)
        
        return maxLen