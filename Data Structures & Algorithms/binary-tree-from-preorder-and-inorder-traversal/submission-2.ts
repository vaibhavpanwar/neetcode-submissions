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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
    if(!inorder.length || !preorder.length) return null;
    let root=new TreeNode(preorder[0]);
    let inorderIndex=inorder.findIndex(v=>v===preorder[0]);
    root.left= this.buildTree(preorder.slice(1,inorderIndex+1), inorder.slice(0,inorderIndex));
    root.right= this.buildTree(preorder.slice(inorderIndex+1), inorder.slice(inorderIndex+1));

    return root;
    }
}
