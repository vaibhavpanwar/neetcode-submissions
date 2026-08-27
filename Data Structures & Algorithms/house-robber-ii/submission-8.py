class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        if not nums:
            return 0

        def check(nums: List[int]) -> int:
            if not nums:
                return 0

            p1 = 0
            p2 = 0
            for num in nums:
                temp = p2
                p2 = max(p2, p1 + num)
                p1 = temp
            return p2

        return max(check(nums[1:]), check(nums[0 : len(nums) - 1]))
