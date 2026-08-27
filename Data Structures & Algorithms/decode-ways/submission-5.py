class Solution:
    def numDecodings(self, s: str) -> int:
        dp = [None] * len(s)

        def check(i):
            if i == len(s):
                return 1
            if s[i] == "0":
                return 0
            if dp[i] is not None:
                return dp[i]
            ways = check(i + 1)
            if i + 1 < len(s):
                two_digit = int(s[i] + s[i + 1])
                if two_digit > 9 and two_digit < 27:
                    ways += check(i + 2)
            
            dp[i]=ways
            return ways
        
        return check(0)
