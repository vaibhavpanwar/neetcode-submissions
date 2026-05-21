class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let resultStr = "";
        let resultStringHash = {};
        for (let char of t) {
            resultStringHash[char] = (resultStringHash[char] || 0) + 1;
        }
        let keys = Object.keys(resultStringHash);

        for (let i = 0; i < s.length; i++) {
            let set = new Set(keys);
            let currentHash = {};
            for (let j = i; j < s.length; j++) {
                let char = s[j];
                currentHash[char] = (currentHash[char] || 0) + 1;

                let matchingKey = keys.find((k) => k === char);
                if (matchingKey) {
                    if (currentHash[matchingKey] === resultStringHash[matchingKey]) {
                        set.delete(matchingKey);
                    }
                }
                if (set.size === 0) {
                    // we covered all chars of T
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
