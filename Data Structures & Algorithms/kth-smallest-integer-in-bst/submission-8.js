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
    kthSmallest(root, k) {
        let count=0
        function traverse(rootNode){
            if(!rootNode) return null
            let left=traverse(rootNode.left)
            if(left !==null) return left
            count++
            if(count===k) return rootNode.val
            return traverse(rootNode.right)
        }
        return traverse(root)
    }
}
