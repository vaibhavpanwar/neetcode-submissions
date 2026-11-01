class TrieW {
    constructor() {
        this.children = Array.from({ length: 26 }, () => null);
        this.isEOW = false;
    }
    addWord(word) {
        let current = this;
        for (let s of word) {
            let ind = s.charCodeAt(0) - 97;
            if (current.children[ind] === null) {
                current.children[ind] = new TrieW();
            }
            current = current.children[ind];
        }
        current.isEOW = true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */

    wordBreak(s, wordDict) {
        let trieNode = new TrieW();
        for (let word of wordDict) {
            trieNode.addWord(word);
        }

        let dp = [];
        function check(i) {
            if (i === s.length) return true;
            if (dp[i] !== undefined) return dp[i];
            let root = trieNode;

            for (let j = i; j < s.length; j++) {
                let idx = s[j].charCodeAt(0) - 97;
                if (root.children[idx] === null) {
                    break;
                }
                root = root.children[idx];
                if (root.isEOW && check(j + 1)) {
                    dp[i] = true;
                    return true;
                }
            }
            dp[i] = false;
            return false;
        }
        return check(0);
    }
}
