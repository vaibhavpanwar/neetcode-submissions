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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        const helper = (
            rootNode: TreeNode | null,
            min: Number = -Infinity,
            max: Number = Infinity,
        ) => {
            if (rootNode === null) return true;
            if (rootNode.val <= min || rootNode.val >= max) {
                return false;
            }
            return (
                helper(rootNode.left, min, rootNode.val) &&
                helper(rootNode.right, rootNode.val, max)
            );
        };

        return helper(root);

    }
}
