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
     * @return {TreeNode}
     */
    invertTree(root) {
        const invert=(rootNode)=>{
            if(rootNode===null) return null
            let temo=rootNode.left
            rootNode.left=rootNode.right
            rootNode.right=temo
            invert(rootNode.left)
            invert(rootNode.right)
            return rootNode
        }
        return invert(root)
    }
}
