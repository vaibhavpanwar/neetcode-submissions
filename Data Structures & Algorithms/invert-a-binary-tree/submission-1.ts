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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) return root;
        let current = root;
        let quee = [current];

        while (quee.length) {
            let node = quee.pop();
            if (node.left) quee.unshift(node.left);
            if (node.right) quee.unshift(node.right);
            let temp = node.right;
            node.right = node.left;
            node.left = temp;
        }
        return root;
    }
}
