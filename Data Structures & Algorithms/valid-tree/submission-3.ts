class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        let adjacencyList: Record<number, number[]> = {};
        let visited = new Set<number>();
        for (let i = 0; i < n; i++) adjacencyList[i] = [];
        for (let [node, neighbour] of edges) {
            adjacencyList[node].push(neighbour);
            adjacencyList[neighbour].push(node);
        }
        function dfs(r: number, p: number | null) {
            visited.add(r);
            for (let neighbour of adjacencyList[r]) {
                if (neighbour === p) continue;
                if (visited.has(neighbour)) return false;
                if (!dfs(neighbour, r)) return false;
            }
            return true;
        }
        return dfs(0, -1) && n === visited.size;
    }
}
