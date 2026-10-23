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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(p, q) {
            if (!p && !q) return true;
            if (p && !q) return false;
            if (q && !p) return false;
            if (p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }

        let q = [root];
        while (q.length) {
            let curr = q.shift();
            if (isSameTree(curr, subRoot)) return true;
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        return false;
    }
}
