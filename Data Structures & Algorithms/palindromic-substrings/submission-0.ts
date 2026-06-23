class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        function isPalindrome(str: string) {
            let l = 0,
                r = str.length - 1;
            while (l <= r) {
                if (str[l] !== str[r]) return false;
                l++;
                r--
            }
            return true;
        }
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (isPalindrome(s.slice(i, j + 1))) count++;
            }
        }
        return count;
    }
}
