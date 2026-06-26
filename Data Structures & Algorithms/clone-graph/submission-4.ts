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
    cloneGraph(node: Node | null): Node {
        let graphMap = {};
        function dfs(root: Node | null) {
            if (root === null) return null;
            if (graphMap[root.val]) return graphMap[root.val];
            let newNode = new Node(root.val);
            graphMap[root.val] = newNode;
            for (let neighbour of root.neighbors) {
                newNode.neighbors.push(dfs(neighbour));
            }
            return newNode;
        }
        return dfs(node);
    }
}
