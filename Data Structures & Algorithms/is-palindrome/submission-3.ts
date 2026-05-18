class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const isAlphaNumeric = (char: string) => {
            const code = char.charCodeAt(0);

            return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
        };
        if (s.length <= 1) return true;

        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (!isAlphaNumeric(s[left].toLowerCase())) {
                left++;
                continue;
            }
            if (!isAlphaNumeric(s[right].toLowerCase())) {
                right--;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }
}
