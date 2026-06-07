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
    maxPathSum(root: TreeNode | null): number {
        let max=root.val
        // this function will return max without splitting but we will keep updating our max including splitted paths as well
        function traverse(rootNode){
         if(rootNode===null) return 0;
         
         let leftMax=traverse(rootNode.left);
         let rightMax=traverse(rootNode.right);
         // omitting negative values to be added to path.
         leftMax=Math.max(leftMax, 0);
         rightMax=Math.max(rightMax, 0);
         max=Math.max(max, rootNode.val+ leftMax+rightMax);

         return rootNode.val+Math.max(leftMax,rightMax)
        }
        traverse(root)
        return max
    }
}
