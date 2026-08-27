class Solution:
    def climbStairs(self, n: int) -> int:
        p1=1
        p2=1
        for i in range(2,n+1):
            temp=p2
            p2=p1+p2
            p1=temp
        return p2
        