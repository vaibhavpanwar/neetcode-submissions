class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        al = {}
        for i in range(numCourses):
            al[i] = []

        for n, e in prerequisites:
            al[n].append(e)
        visited = set()

        def traverse(n):
            if n in visited:
                return False
            if not al[n]:
                return True
            visited.add(n)
            for ne in al[n]:
                if not traverse(ne):
                    return False
            visited.remove(n)
            al[n] = []
            return True

        for i in range(numCourses):
            if not traverse(i):
                return False

        return True
