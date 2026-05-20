class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringUsingSet(s: string): number {
        // longest length of string me se string dhundhni hai
        // jisme koi character repeat na ho
        // its like the counter one i did kinda kinda
        // main set use kruga
        /*
            vaibhavanduzliporz
            01
        set me add krde 
        v ko krde a ko krde i ko krde 
        5 
        

        */
        let set = new Set();
        let i = 0;
        let j = 0;
        let maxCount = 0;
        while (i <= j && j < s.length) {
            if (set.has(s[j])) {
                // keep changing i to the repeated element plus one
                while (set.has(s[j])) {
                    set.delete(s[i]);
                    i++;
                }
            }
            set.add(s[j]);

            maxCount = Math.max(maxCount, j - i + 1);
            j++;
        }
        return maxCount;
    }
    lengthOfLongestSubstring(s: string): number {
        let hash: Record<string, number> = {};
        let maxCount = 0;
        let i = 0,
            j = 0;

        while (i <= j && j < s.length) {
            if (hash.hasOwnProperty(s[j]) && hash[s[j]] >= i) {
                i = hash[s[j]] + 1;
            }
            hash[s[j]] = j;
            maxCount = Math.max(maxCount, j - i+1);
            j++;
        }

        return maxCount;
    }
}
