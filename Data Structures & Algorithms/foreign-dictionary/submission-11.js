class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj = {};
        for (let word of words) {
            for (let char of word) {
                adj[char] = new Set();
            }
        }
        for (let i = 0; i < words.length - 1; i++) {
            let word1 = words[i];
            let word2 = words[i + 1];
            let minLen = Math.min(word1.length, word2.length);
            if (word1.length > word2.length && word1.slice(0, minLen) === word2.slice(0, minLen))
                return "";

            for (let i = 0; i < word1.length; i++) {
                if (word1[i] !== word2[i]) {
                    adj[word1[i]].add(word2[i]);
                    break;
                }
            }
        }
        //
        let visited = {};
        let result = [];
        function traverse(c) {
            if (visited.hasOwnProperty(c)) return visited[c];
            visited[c] = true;
            for (let ne of adj[c]) {
                if (traverse(ne)) return true;
            }
            visited[c] = false;
            result.push(c);
        }

        for (let n in adj) {
            if (traverse(n)) return "";
        }

        return result.reverse().join("");
    }
}
