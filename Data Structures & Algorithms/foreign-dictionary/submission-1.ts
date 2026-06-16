class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
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
        console.log(adjacencyList);
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
            console.log(n, "dekh");
            if (dfs(n)) return "";
        }
        return result.reverse().join("");
    }
}
