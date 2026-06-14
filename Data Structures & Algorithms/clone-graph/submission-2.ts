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
        let visited = {};
        // will store clones against node.valuess
        function dfs(node: Node | null) {
            if (!node) return null;
            if (visited[node.val]) return visited[node.val];

            let newNode = new Node(node.val);
            visited[node.val] = newNode;

            //recursively populate neighbours;
            for (let neighbor of node.neighbors) {
                newNode.neighbors.push(dfs(neighbor));
            }
            return newNode;
        }

        return dfs(node);
    }
}
