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
    invertTreeBFS(root: TreeNode | null): TreeNode {
        if (!root) return root;
        let current = root;
        let quee = [current];
        let front = 0;

        while (front < quee.length) {
            let node = quee[front++];
            if (node.left) quee.push(node.left);
            if (node.right) quee.push(node.right);
            let temp = node.right;
            node.right = node.left;
            node.left = temp;
        }
        return root;
    }
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) return root;
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
        if (root.left) this.invertTree(root.left);
        if (root.right) this.invertTree(root.right);
        return root;
    }
}
