class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let visited = new Set();
        let adj = {};
        for (let i = 0; i < numCourses; i++) {
            adj[i] = [];
        }

        for (let [c, r] of prerequisites) {
            adj[c].push(r);
        }

        function dfs(node) {
            if (visited.has(node)) return false;
            if (adj[node].length === 0) return true;

            visited.add(node);
            for (let ne of adj[node]) {
                if (!dfs(ne)) return false;
            }
            visited.delete(node);
            adj[node] = [];
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }
        return true;
    }
}
