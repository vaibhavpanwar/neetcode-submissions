class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        max_count = 0
        num_sets = set(nums)
        for num in num_sets:
            if (num - 1) not in num_sets:
                n = num
                count = 1
                while n + 1 in num_sets:
                    n += 1
                    count += 1
                max_count = max(max_count, count)
        return max_count
