class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = {};
        let visited = new Set();
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }
        for (let [node, edge] of edges) {
            adj[node].push(edge);
            adj[edge].push(node);
        }
        function dfs(root) {
            visited.add(root);
            for (let ne of adj[root]) {
                if (!visited.has(ne)) dfs(ne);
            }
            return;
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                count++;
            }
        }
        return count;
    }
}
