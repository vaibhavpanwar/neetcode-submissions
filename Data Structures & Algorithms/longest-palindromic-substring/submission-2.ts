//brute force
class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindromeBrute(s: string): string {
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
                        resultStr = s.slice(i, j + 1);
                    }
                }
            }
        }

        return resultStr;
    }

    longestPalindrome(s: string): string {
        let resultStr = s.slice(0, 1);
        let maxStrLength = 1;
        let dp: boolean[][] = [];
        function check(l: number, r: number): boolean {
            if (l >= r) return true;
            if (typeof dp[l]?.[r] === "boolean") return dp[l][r];
            if (s[l] !== s[r]) {
                if (!dp[l]) dp[l] = [];
                dp[l][r] = false;
                return false;
            }
            let res = check(l + 1, r - 1);
            if (!dp[l]) dp[l] = [];

            dp[l][r] = res;
            return res;
        }

        for (let i = 0; i < s.length; i++) {
            for (let j = s.length - 1; j > i; j--) {
                if (j - i + 1 > maxStrLength) {
                    if (check(i, j)) {
                        maxStrLength = j - i + 1;
                        resultStr = s.slice(i, j+1);
                    }
                }
            }
        }

        return resultStr;
    }
}
