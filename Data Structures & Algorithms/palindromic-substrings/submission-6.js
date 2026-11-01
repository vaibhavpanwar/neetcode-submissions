class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        function check(l, r) {
            let count = 0;
            while (l >= 0 && r >= 0 && l < s.length && r < s.length && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
            return count;
        }
        let total = 0;
        for (let i = 0; i < s.length; i++) {
            let odd = check(i, i);
            let even = check(i, i + 1);
            total += odd + even;
        }
        return total;
    }
}
