class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
         if (s.length !== t.length) return false;
    let string1Chars: Record<string, number> = {};
    let string2Chars: Record<string, number> = {}

    for (let i = 0; i < s.length; i++) {
        string1Chars[s[i]] = (string1Chars[s[i]] || 0) + 1
        string2Chars[t[i]] = (string2Chars[t[i]] || 0) + 1
    }
    for (let key in string1Chars) {
        if (string1Chars[key] !== string2Chars[key]) return false
    }
    return true
    }
}
