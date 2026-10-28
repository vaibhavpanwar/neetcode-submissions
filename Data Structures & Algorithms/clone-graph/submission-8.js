/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let visited = {};

        function dfs(rootNode) {
            if (rootNode === null) return null;
            if (visited[rootNode.val]) return visited[rootNode.val];

            let newNode = new Node(rootNode.val);

            visited[newNode.val] = newNode;

            for (let ne of rootNode.neighbors) {
                newNode.neighbors.push(dfs(ne));
            }
            return newNode;
        }

        return dfs(node);
    }
}
