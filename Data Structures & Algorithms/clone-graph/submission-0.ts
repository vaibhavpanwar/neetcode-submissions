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
        if (!node) return null;
        let oldToNew = new Map<Node,Node>();

        function clone(n: Node) {
            if (oldToNew.has(n)) return oldToNew.get(n);
            let newNode = new Node(n.val);
            oldToNew.set(n, newNode);
            for (let neighbour of n.neighbors) {
                newNode.neighbors.push(clone(neighbour));
            }
            return newNode;
        }

       return clone(node)
    }
}
