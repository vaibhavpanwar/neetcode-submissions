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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        const _removeNode = (rootNode: TreeNode | null, val: number): TreeNode => {
            if (rootNode === null) return null;
            if (val < rootNode.val) {
                rootNode.left = _removeNode(rootNode.left, val);
            }
            if (val > rootNode.val) {
                rootNode.right = _removeNode(rootNode.right, val);
            }
            if (val === rootNode.val) {
                if (!rootNode.left) return rootNode.right;
                if (!rootNode.right) return rootNode.left;
                // dono hi null nahi hain
                // we will get the inorder successsor;
                let inOrderSuccessor = rootNode.right;
                while (inOrderSuccessor.left) {
                    inOrderSuccessor = inOrderSuccessor.left;
                }
                //
                rootNode.val = inOrderSuccessor.val;
                rootNode.right = _removeNode(rootNode.right, inOrderSuccessor.val);
            }
            return rootNode;
        };
        root=_removeNode(root, key)
        return root
    }
}
