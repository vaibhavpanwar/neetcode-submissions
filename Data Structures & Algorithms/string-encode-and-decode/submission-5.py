class Solution:
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += f"{len(s)}#{s}"
        return res

    def decode(self, s: str) -> List[str]:
        i = 0
        res = []
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            # j is at the #
            wordLen = s[i:j]
            nextIterationPoint = int(wordLen) + 1 + j
            res.append(s[j + 1 : nextIterationPoint])
            i = nextIterationPoint

        return res
