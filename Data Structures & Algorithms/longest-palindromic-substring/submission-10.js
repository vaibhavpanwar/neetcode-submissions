class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        function check(l, r) {
            while (l >= 0 && r >= 0 && l < s.length && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }
            return r - l - 1;
        }
        let max = 0;
        let start = 0;
        for (let i = 0; i < s.length; i++) {
            let odd = check(i, i);
            let even = check(i, i + 1);
            let maxLen = Math.max(odd, even);
            if (maxLen > max) {
                max = maxLen;
                start = i - Math.floor((max - 1) / 2);
            }
        }
        return s.slice(start, start + max);
    }
}
