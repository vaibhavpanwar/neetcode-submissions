class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
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
        let j =0
        let maxCount = 0;
        while (i <= j && j < s.length) {
            if (set.has(s[j])) {
                // keep changing i to the repeated element plus one
                while (set.has(s[j])) {
                    set.delete(s[i]);
                    i++;
                }
            } else {
                set.add(s[j]);
                j++;
            }

            maxCount = Math.max(maxCount, (j-i));
        }
        return maxCount;
    }
}
