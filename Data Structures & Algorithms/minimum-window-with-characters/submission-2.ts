class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let resultStr = "";
        let resultStringHash: Record<string, number> = {};
        for (let char of t) {
            resultStringHash[char] = (resultStringHash[char] || 0) + 1;
        }

        let keys = Object.keys(resultStringHash);

        for (let i = 0; i < s.length; i++) {
            let set = new Set(keys);
            let currentHash: Record<string, number> = {};
            for (let j = i; j < s.length; j++) {
                let char = s[j];
                currentHash[char] = (currentHash[char] || 0) + 1;

                if (resultStringHash[char] && resultStringHash[char] === currentHash[char]) {
                    set.delete(char);
                }
                if (set.size === 0) {
                    let currString = s.slice(i, j + 1);
                    if (resultStr === "") {
                        resultStr = currString;
                    } else {
                        if (currString.length < resultStr.length) {
                            resultStr = currString;
                        }
                    }
                    break;
                }
            }
        }

        return resultStr;
    }
}
