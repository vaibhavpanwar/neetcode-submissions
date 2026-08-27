class Solution:
    def rob(self, nums: List[int]) -> int:
        p1=0
        p2=0
        for num in nums:
            temp=p2
            p2=max(p2,p1+num)
            p1=temp
        return p2
        