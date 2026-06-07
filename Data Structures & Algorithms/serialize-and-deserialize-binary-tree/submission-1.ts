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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serializeWithPreAndIn(root: TreeNode | null): string {
        let inorder = [];
        let preorder = [];
        function traverse(rootNode) {
            if (rootNode === null) return;
            preorder.push(rootNode.val);
            if (rootNode.left) traverse(rootNode.left);
            if (rootNode.right) traverse(rootNode.right);
        }
        function traversePreOrder(rootNode) {
            if (rootNode === null) return;
            if (rootNode.left) traversePreOrder(rootNode.left);
            inorder.push(rootNode.val);
            if (rootNode.right) traversePreOrder(rootNode.right);
        }
        traverse(root);
        traversePreOrder(root);
        return [...inorder, "##", ...preorder].join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserializeWithPreAndIn(data: string): TreeNode {
        let jointArray = data.split(",");
        let ind = jointArray.findIndex((el) => el === "##");
        let inorder = jointArray.slice(0, ind);
        let preorder = jointArray.slice(ind + 1);

        function traverse(pre, ino) {
            if (!pre.length || !ino.length) return null;
            let root = new TreeNode(pre[0]);
            let inorderIndex = ino.findIndex((el) => el === pre[0]);

            root.left = traverse(pre.slice(1, inorderIndex + 1), ino.slice(0, inorderIndex));
            root.right = traverse(pre.slice(inorderIndex + 1), ino.slice(inorderIndex + 1));
            return root;
        }
        return traverse(preorder, inorder);
    }

    serialize(root: TreeNode | null): string {
        let str = "";

        function traverse(rootNode) {
            if (rootNode === null) {
                str += ",N";
                return;
            }
            str += "," + rootNode.val;
            traverse(rootNode.left);
            traverse(rootNode.right);
        }
        traverse(root);
        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        // starting with 1 to skip first element
        let i = 1;
        let arr = data.split(",");
        console.log(data,'check')
        function traverse() {
            if (arr[i] === "N") {
                i++;
                return null;
            }
            let root = new TreeNode(Number(arr[i]));
             i++;
            root.left = traverse();
            root.right = traverse();
         
            return root;
        }
        //"1,2,N,N,11,12,N,14"
        return traverse();
    }
}
