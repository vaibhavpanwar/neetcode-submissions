//brute force
class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let resultStr = s.slice(0, 1);
        let maxStrLength = 1;
        function isPalindrome(str: string): boolean {
            let l = 0,
                r = str.length - 1;
            while (l <= r) {
                if (str[l] !== str[r]) return false;
                l++;
                r--;
            }
            return true;
        }

        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j < s.length; j++) {
                if (j - i + 1 > maxStrLength) {
                    if (isPalindrome(s.slice(i, j + 1))) {
                        maxStrLength = j - i + 1;
                        resultStr = s.slice(i, j+1);
                    }
                }
            }
        }

        return resultStr;
    }
}
