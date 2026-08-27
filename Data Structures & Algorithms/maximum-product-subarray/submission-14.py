class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        minMax = 1
        maxMax = 1
        maxProduct = max(nums)

        for num in nums:
            if num == 0:
                minMax = 1
                maxMax = 1
                continue
            temp = maxMax
            maxMax = max(num * maxMax, num * minMax, num)
            minMax = min(num * temp, num * minMax, num)
            maxProduct = max(maxProduct, minMax, maxMax)
        return maxProduct
