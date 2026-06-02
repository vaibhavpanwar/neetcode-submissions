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
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const isSame = (p: TreeNode | null, q: TreeNode | null) => {
            if (!p || !q) return p === q;
            return p.val === q.val && isSame(p?.left, q?.left) && isSame(p?.right, q?.right);
        };
        let stack = [root];
        while (stack.length) {
            let current = stack.pop();
            if (isSame(current, subRoot)) {
                return true;
            }
            if (current.left) stack.push(current.left);
            if (current.right) stack.push(current.right);
        }
        return false;
    }
}
