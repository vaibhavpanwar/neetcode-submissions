# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def isSame(p, q):
            if p is None and q is None:
                return True
            if not p or not q:
                return False
            return p.val == q.val and isSame(p.left, q.left) and isSame(p.right, q.right)

        queue = deque()
        queue.append(root)
        while queue:
            curr = queue.popleft()

            if isSame(curr, subRoot):
                return True
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)

        return False
