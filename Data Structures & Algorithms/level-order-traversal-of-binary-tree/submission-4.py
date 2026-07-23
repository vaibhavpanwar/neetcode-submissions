# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None: return []
        result=[]
        queue=deque()
        queue.append(root)
        print(queue)
        while(queue):
            l=len(queue)
            local_result=[]
            while l: 
                curr=queue.popleft()
                local_result.append(curr.val)
                if curr.left: queue.append(curr.left)
                if curr.right: queue.append(curr.right)
                l-=1
            if local_result: result.append(local_result)
            

 
        return result
        