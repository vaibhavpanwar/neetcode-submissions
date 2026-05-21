class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindowBrute(s: string, t: string): string {
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
    minWindow(s: string, t: string): string {
        if (t === "") return t;
        let resultStr = "";
        let hash: Record<string, number> = {};

        for (let char of t) {
            hash[char] = (hash[char] || 0) + 1;
        }
        let neededCount = Object.keys(hash).length;
        let currentCount = 0;
        let i = 0,
            j = 0;
        let windowHash: Record<string, number> = {};
        while (i <= j && j < s.length) {
            if (hash[s[j]]) {
                windowHash[s[j]] = (windowHash[s[j]] || 0) + 1;

                if (windowHash[s[j]] === hash[s[j]]) {
                    currentCount++;
                }

                while (currentCount === neededCount) {
                    let str = s.slice(i, j + 1);
                    if (resultStr === "") resultStr = str;
                    else {
                        if (str.length < resultStr.length) resultStr = str;
                    }
                    if (hash[s[i]]) {
                        windowHash[s[i]]--;
                    }
                    if (windowHash[s[i]] < hash[s[i]]) {
                        currentCount--;
                    }

                    i++;
                }
            }
            j++;
        }

        return resultStr;
    }
}
