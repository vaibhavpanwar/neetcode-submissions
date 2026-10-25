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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [root];
        let result = [];

        while (queue.length) {
            let len = queue.length;
            let localResult = [];
            while (len > 0) {
                let curr = queue.shift();
                if(!curr) break;
                localResult.push(curr.val);
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
                len--;
            }
            if (localResult.length) result.push(localResult);
        }

        return result;
    }
}
