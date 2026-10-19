class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hash = {};
        let i = 0;
        let j = 0;
        let maxLen = 0;
        while (j < s.length) {
            if (hash.hasOwnProperty(s[j]) && hash[s[j]] >= i) {
                i = hash[s[j]] + 1;
            }
            hash[s[j]] = j;
            maxLen = Math.max(j - i + 1, maxLen);
            j++;
        }

        return maxLen;
    }
}
