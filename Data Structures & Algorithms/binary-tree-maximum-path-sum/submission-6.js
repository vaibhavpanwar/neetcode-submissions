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
     * @return {number}
     */
    maxPathSum(root) {
        let maxVal=root.val

        function max(rootNode){
            if(rootNode===null) return 0
            let left=max(rootNode.left)
            let right=max(rootNode.right)
            let leftMax=Math.max(left,0)
            let rightMax=Math.max(right,0)
            maxVal=Math.max(maxVal,rootNode.val+leftMax+rightMax)
            return rootNode.val+Math.max(leftMax,rightMax)
        }
        max(root)
        return maxVal
    }
}
