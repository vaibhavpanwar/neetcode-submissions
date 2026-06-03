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
    levelOrder(root: TreeNode | null): number[][] {
        let results: number[][] = [];
        let queue = [root];
        let n = 0;
        while (n < queue.length) {
            let localResult: number[] = [];
            let queueLength = queue.length - n;
            while (queueLength !== 0) {
                let current = queue[n++];
                if (current) {
                    localResult.push(current.val);
                    if (current.left) queue.push(current.left);
                    if (current.right) queue.push(current.right);
                }
                queueLength--;
            }
            if (localResult.length) results.push(localResult);
        }
        return results;
    }
}
