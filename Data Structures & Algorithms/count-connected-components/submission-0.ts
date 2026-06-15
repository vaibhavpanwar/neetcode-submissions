class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let adjacencyList = {};
        for (let i = 0; i < n; i++) adjacencyList[i] = [];
        let visited = new Set();
        for (let [node, edge] of edges) {
            adjacencyList[node].push(edge);
            adjacencyList[edge].push(node);
        }

        let count = 0;
        function dfs(node: number) {
            if (visited.has(node)) return;
            visited.add(node);
            for (let neighbor of adjacencyList[node]) {
                if (!visited.has(neighbor)) dfs(neighbor);
            }
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                count++;
            }
        }
        return count;
    }
}
