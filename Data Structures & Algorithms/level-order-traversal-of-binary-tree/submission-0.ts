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
        while (queue.length) {
            let localResult: number[] = [];
            let queueLength = queue.length;
            while (queueLength !== 0) {
                let current = queue.pop();
                if (current){ localResult.push(current.val);
                if(current.left) queue.unshift(current.left)
                if(current.right) queue.unshift(current.right)}
                queueLength--;
            }
            if(localResult.length) results.push(localResult)
        }
        return results;
    }
}
