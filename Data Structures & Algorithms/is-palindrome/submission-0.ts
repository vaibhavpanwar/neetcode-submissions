class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
       if(s.length<=1) return true
        let normalisedString: string = "";
        for (let letter of s) {
            if (/^[a-z0-9]+$/i.test(letter)) normalisedString += letter.toLowerCase();
        }
        let left = 0;
        let right = normalisedString.length - 1;
        while (left < right) {
            if (normalisedString[left] !== normalisedString[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
