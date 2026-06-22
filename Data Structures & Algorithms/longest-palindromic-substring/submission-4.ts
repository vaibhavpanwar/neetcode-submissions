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
    // O(N^2) for substrings and O(N) for checking palindrome
    longestPalindromeTopDown(s: string): string {
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
                        resultStr = s.slice(i, j + 1);
                    }
                }
            }
        }

        return resultStr;
    }
    // O(N^2) because we are caching the results so values will not be recomuted
    // SC O(N^2) for DP and O(N) for recursive stack

    // another approach we could check from center and expand where we can get the maximum
    // substring this will use O(N^2) but with constant space complexity
    longestPalindrome(s: string): string {
        let st = 0,
            maxLength = 1;

        function check(l: number, r: number): number {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }

            // when the condition is not met the palindroms is at last met condition
            // (r-1)- (l+1)+1=> r-l-1
            return r - l - 1;
        }
        for (let i = 0; i < s.length; i++) {
            // odd length l and r are sham
            let odd = check(i, i);
            let even = check(i, i + 1);
            let len=Math.max(odd,even);
            
            if(len>maxLength){
                maxLength=len;
                st=i-Math.floor((len-1)/2)
            }
        }
        console.log(st, maxLength);

        return s.slice(st, st + maxLength);
    }
}
