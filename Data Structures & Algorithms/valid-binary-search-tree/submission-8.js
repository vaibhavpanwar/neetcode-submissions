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
    isValidBST(root) {
        function valid(rootNode, min = -Infinity, max = Infinity) {
            if (!rootNode) return true;
            if (rootNode.val <= min || rootNode.val >= max) {
                return false;
            }
            return (
                valid(rootNode.left, min, rootNode.val) && valid(rootNode.right, rootNode.val, max)
            );
        }
        return valid(root);
    }
}
