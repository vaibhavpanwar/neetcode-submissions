class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        let aL = {};
        for (let i = 0; i < n; i++) {
            aL[i] = [];
        }
        for (let [c, p] of edges) {
            aL[c].push(p);
            aL[p].push(c);
        }

        let visited = new Set();
        function dfs(n, p) {
            visited.add(n);
            for (let neighbor of aL[n]) {
                if (neighbor === p) continue;
                if (visited.has(neighbor)) return false;
                if (!dfs(neighbor, n)) return false;
            }
            return true;
        }
        return dfs(0, -1) && visited.size === n;
    }
}
