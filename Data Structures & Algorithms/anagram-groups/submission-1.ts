class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
    let hash: Record<string, string[]> = {};

    for (let str of strs) {
        const counter = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 97;
            counter[index]++
        }
        const uniqueAlphaKey = counter.join('#') // seperator is jruri wrna conflcits aaskte hain (11,1), (1,11) dono 111 hjaynge

        if (hash.hasOwnProperty(uniqueAlphaKey)) {
            hash[uniqueAlphaKey].push(str)
        } else {
            hash[uniqueAlphaKey] = [str]
        }
    }

    return Object.values(hash)
    }
}
