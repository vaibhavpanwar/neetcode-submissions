# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        maxPath=[root.val]
        def check(node):
            if not node:  return 0
            leftMax=check(node.left)
            rightMax=check(node.right)
            leftMax=max(0,leftMax)
            rightMax=max(0,rightMax)
            maxPath[0]=max(maxPath[0], leftMax+rightMax+node.val)
            return node.val + max(leftMax, rightMax)
        check(root)
        return maxPath[0]
        