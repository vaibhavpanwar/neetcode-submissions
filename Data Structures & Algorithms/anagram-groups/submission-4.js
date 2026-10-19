class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {};

        for (let st of strs) {
            const arr = new Array(26).fill(0);
            for (let i = 0; i < st.length; i++) {
                let ind = st[i].charCodeAt(0) - 97;
                arr[ind]++;
            }
            let char = arr.join("#");
            if (hash[char]) hash[char].push(st);
            else hash[char] = [st];
        }
        return Object.values(hash);
    }
}
