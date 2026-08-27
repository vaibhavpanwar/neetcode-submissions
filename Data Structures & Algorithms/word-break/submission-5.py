class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        cur = self.root
        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.word = True


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        trie = WordDictionary()

        for word in wordDict:
            trie.addWord(word)

        dp = [None] * len(s)

        def check(i):
            if i==len(s): return True
            if dp[i] is not None:
                return dp[i]
            root = trie.root
            for j in range(i, len(s)):
                if s[j] not in root.children:
                    break
                root = root.children[s[j]]
                if root.word and check(j+1):
                    dp[j] = True
                    return True

            dp[i] = False
            return dp[i]

        return check(0)
