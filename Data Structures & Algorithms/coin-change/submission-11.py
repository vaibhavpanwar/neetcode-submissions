class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp=[None]*(amount+1)
        
        def check(am):
            if am==0: return 0
            if am<0 : return float('inf')
            if dp[am] is not None: return dp[am]

            ways=float('inf')
            for coin in coins:
                remaining= am-coin
                if remaining >=0:
                    ways=min(1+check(remaining), ways)
            
            dp[am]=ways
            return ways
        
        way= check(amount)
        return -1 if way == float('inf') else way 

        