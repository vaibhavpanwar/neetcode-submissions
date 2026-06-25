class TrieW {
    children: (null | TrieW)[];
    isEOW: boolean;
    constructor() {
        this.children = Array.from({ length: 26 }, () => null);
        this.isEOW = false;
    }
    addWord(word: string) {
        let current: TrieW = this;
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
    wordBreak(s: string, wordDict: string[]): boolean {
        let trieNode = new TrieW();
        for (let word of wordDict) {
            trieNode.addWord(word);
        }
        let dp = [];
        function check(i: number): boolean {
            if (i === s.length) return true;

            //base cases
            if (dp[i] !== undefined) return dp[i];
            let root = trieNode;
            for (let j = i; j < s.length; j++) {
                let idx = s.charCodeAt(j) - 97;
                if (root.children[idx] === null) {
                    break;
                }
                root = root.children[idx];
                // this line will check from every first word match that remaining portion should match
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
