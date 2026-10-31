class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let visited = new Set();
        let adj = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }
        for (let [node, edge] of edges) {
            adj[node].push(edge);
            adj[edge].push(node);
        }

        function dfs(r, p) {
            if (visited.has(r)) return false;
            visited.add(r);
            for (let ne of adj[r]) {
                if (ne === p) continue;
                if (!dfs(ne, r)) return false;
            }
            return true;
        }
        return dfs(0, -1) && visited.size === n;
    }
}
