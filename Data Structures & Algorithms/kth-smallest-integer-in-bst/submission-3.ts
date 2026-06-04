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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let results: number[] = [];

        function traverse(rootNode: TreeNode | null) {
            if (rootNode.left) traverse(rootNode.left);
            results.push(rootNode.val);
            if (rootNode.right) traverse(rootNode.right);
        }
        traverse(root);
        return results[k - 1] || null;
    }
}
