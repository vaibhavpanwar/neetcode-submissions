class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let seen = {};
        let i = 0;
        let j = 0;
        let maxFreq = 0;
        let maxLen = 0;
        while (i <= j && j < s.length) {
            seen[s[j]] = (seen[s[j]] || 0) + 1;
            maxFreq = Math.max(maxFreq, seen[s[j]]);

            let len = j - i + 1;
            let actions = len - maxFreq;

            if (actions <= k) {
                maxLen = Math.max(maxLen, len);
            } else {
                seen[s[i]]--;
                i++;
            }
            j++;
        }
        return maxLen;
    }
}
