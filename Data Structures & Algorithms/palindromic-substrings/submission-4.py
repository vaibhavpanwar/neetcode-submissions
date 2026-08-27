class Solution:
    def countSubstrings(self, s: str) -> int:
        l=len(s)
        def check(i,j):
            count=0
            while i>=0 and j>=0 and i<l and j<l and s[i]==s[j]:
                count+=1
                i-=1
                j+=1
            return count
        

        total_count=0
        for i in range(0,l):
            odd=check(i,i)
            even=check(i,i+1)
            total_count+=odd+even
        return total_count
        