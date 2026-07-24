# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        count = 0

        def traverse(node):
            nonlocal count
            if not node:
                return None
            left = traverse(node.left)
            if left is not None:
                return left
            count += 1
            if count == k:
                return node.val
            return traverse(node.right)

        return traverse(root)
