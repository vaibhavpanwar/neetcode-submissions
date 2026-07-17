"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""


class Solution:
    def cloneGraph(self, node: Optional["Node"]) -> Optional["Node"]:
        if node is None:
            return None
        graphMap = {}

        def clone(root):
            if root.val in graphMap:
                return graphMap[root.val]
            newNode = Node(root.val)
            graphMap[root.val] = newNode

            for ne in root.neighbors:
                newNode.neighbors.append(clone(ne))

            return newNode

        return clone(node)
