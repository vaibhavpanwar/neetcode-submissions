class Solution:
    def longestPalindrome(self, s: str) -> str:
        l = len(s)

        def check(i, j):
            while i >= 0 and j >= 0 and i < l and j < l and s[i] == s[j]:
                i -= 1
                j += 1
            return j - i - 1

        longest = 0
        starting = 0
        for i in range(0, l):
            odd = check(i, i)
            even = check(i, i + 1)
            new_len = max(odd, even)
            if new_len > longest:
                longest = new_len
                starting = i - (new_len - 1) // 2

        return s[starting : (starting + longest)]
