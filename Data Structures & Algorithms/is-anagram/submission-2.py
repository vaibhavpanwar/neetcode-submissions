class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        freq1 = {}
        freq2 = {}

        for i in range(len(s)):
            freq1[s[i]] = freq1.get(s[i], 0) + 1
            freq2[t[i]] = freq2.get(t[i], 0) + 1

        for key in freq1:
            if freq1[key] != freq2.get(key,0):
                return False

        return True
