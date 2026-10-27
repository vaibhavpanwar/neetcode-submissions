/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];
        function traverse(rootNode) {
            if (rootNode === null) {
                result.push("N");
                return null;
            }
            result.push(rootNode.val);
            traverse(rootNode.left);
            traverse(rootNode.right);
        }
        traverse(root);
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let arr = data.split(",");
        let i = 0;

        function traverse() {
            if (arr[i] === "N") {
                i++;
                return null;
            }
            let root = new TreeNode(arr[i]);
            i++;
            root.left = traverse();
            root.right = traverse();
            return root;
        }
        return traverse();
    }
}
