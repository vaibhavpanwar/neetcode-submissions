class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLength = 0;
        let i = 0,
            j = 0;
        let hash = {};
        let maxFrequency = 0;
        while (i <= j && j < s.length) {
            hash[s[j]] = (hash[s[j]] || 0) + 1;
            maxFrequency = Math.max(hash[s[j]], maxFrequency);
            let actions = j - i + 1 - maxFrequency;
            if (actions <= k) {
                maxLength = Math.max(j - i + 1, maxLength);
            } else {
                hash[s[i]]--;
                i++;
            }
            j++;
        }
        return maxLength;
    }
}
