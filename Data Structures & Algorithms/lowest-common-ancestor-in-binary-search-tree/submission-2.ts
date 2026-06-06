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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestorRecusrive(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        if (p.val < root.val && q.val < root.val) {
            return this.lowestCommonAncestorRecusrive(root.left, p, q);
        }
        if (p.val > root.val && q.val > root.val) {
            return this.lowestCommonAncestorRecusrive(root.right, p, q);
        }
        return root;
    }
    // TC--> O(H)
    // SC -->O(H) recursive function stack, (O(N) for skewed trees
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        while (root) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
              
                root = root.right;
            } else 
            {
                return root;
            }
        }

        return root;
    }
}
