class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstringsBrute(s: string): number {
        function isPalindrome(str: string) {
            let l = 0,
                r = str.length - 1;
            while (l <= r) {
                if (str[l] !== str[r]) return false;
                l++;
                r--;
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
    countSubstrings(s: string): number {
        let dp: boolean[][] = [];
        function check(l: number, r: number): boolean {
            if (l >= r) return true;
            if (dp[l] && typeof dp[l][r] === "boolean") return dp[l][r];
            if (s[l] !== s[r]) {
                if (!dp[l]) dp[l] = [];
                dp[l][r] = false;
                return false;
            }
            let res = check(l+1, r-1);
            if (!dp[l]) dp[l] = [];
            dp[l][r] = res;
            return res;
        }

        let count = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = s.length - 1; j >= i; j--) {
                if (check(i, j)) count++;
            }
        }
        return count;
    }
}
