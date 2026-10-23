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
    lowestCommonAncestor(root, p, q) {
        function traverse(rootNode){
            if(!rootNode) return rootNode
            if(rootNode.val >p.val && rootNode.val> q.val){
                return traverse(rootNode.left)
            }else if( rootNode.val<p.val && rootNode.val < q.val){
                return traverse(rootNode.right)
            }
            return rootNode
        }
        return traverse(root)
    }
}
