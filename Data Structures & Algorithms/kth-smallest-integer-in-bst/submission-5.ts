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
    kthSmallestWithArray(root: TreeNode | null, k: number): number {
        let results: number[] = [];

        function traverse(rootNode: TreeNode | null) {
            if (rootNode.left) traverse(rootNode.left);
            results.push(rootNode.val);
            if (rootNode.right) traverse(rootNode.right);
        }
        traverse(root);
        return results[k - 1] || null;
    }
    // TC --> O(H + K)--> O(n) worsrt
    // SC --> O(N)
    kthSmallestIterative(root: TreeNode | null, k: number): number {
        let curr=root;
        let stack=[]

        while(curr || stack.length){
            while(curr){
                stack.push(curr);
                curr=curr.left;
            }
            curr=stack.pop();
            k--;
            if(k===0) return curr.val;
            curr=curr.right
        }
    }
    // TC --> O(H + K)--> O(n) worsrt
    // SC --> O(H) stack
        kthSmallest(root: TreeNode | null, k: number): number {
       let count=0;
       function traverse(rootNode:TreeNode|null): number|null{
        if(rootNode===null) return null;
        const left=traverse(rootNode.left);
        // jab tk main extreme left ni phuch jata tb tk count ni bdhauga 
        if(left!==null)return left;
        count++;
        if(count===k) return rootNode.val;
        return traverse(rootNode.right)

       }
       return traverse(root)
    }
    

}
