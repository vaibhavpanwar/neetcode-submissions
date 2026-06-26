class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary1(words: string[]): string {
        let adjacencyList = {};
        for (let word of words) {
            for (let char of word) {
                adjacencyList[char] = new Set();
            }
        }
        for (let i = 0; i < words.length - 1; i++) {
            let word1 = words[i];
            let word2 = words[i + 1];
            let minLength = Math.min(word1.length, word2.length);
            // invalid condition like abcd, abc
            if (
                word1.length > word2.length &&
                word1.slice(0, minLength) === word2.slice(0, minLength)
            ) {
                return "";
            }

            for (let j = 0; j < word1.length; j++) {
                if (word1[j] !== word2[j]) {
                    adjacencyList[word1[j]].add(word2[j]);
                    break;
                }
            }
        }
        const visited = {};
        let result = [];
        function dfs(node) {
            if (visited.hasOwnProperty(node)) return visited[node];
            visited[node] = true;
            for (let neighbour of adjacencyList[node]) {
                if (dfs(neighbour)) return true;
            }
            visited[node] = false;
            result.push(node);
        }
        for (let n in adjacencyList) {
            if (dfs(n)) return "";
        }
        return result.reverse().join("");
    }
      foreignDictionary(words: string[]): string {
        let aL = {};
        for (let word of words) {
            for (let c of word) {
                aL[c] = new Set();
            }
        }
        for (let i = 0; i < words.length - 1; i++) {
            let word1 = words[i],
                word2 = words[i + 1];
            if (
                word1.length > word2.length &&
                word1.slice(0, word2.length) === word2.slice(0, word2.length)
            ) {
                return "";
            }
            // start creating graph
            for (let i = 0; i < word1.length; i++) {
                if (word2[i] && word1[i] !== word2[i]) {
                    aL[word1[i]].add(word2[i]);
                    break;
                }
            }
        }
        let visited = {};
        //visited false will track result is added or not and visited true will detect cycle and will return empty string
        let result = [];
        function dfs(n: string) {
            if (visited.hasOwnProperty(n)) return visited[n];
            visited[n] = true;
            for (let ne of aL[n]) {
                if (dfs(ne)) return false;
            }
            visited[n] = false;
            result.push(n);
        }
        for (let key in aL) {
            if (dfs(key)) return "";
        }
        return result.reverse().join("");
    }
}
