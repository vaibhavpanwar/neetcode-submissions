class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        path = set()
        numRows = len(grid)
        numCols = len(grid[0])

        def dfs(r, c):
            if (
                r < 0
                or r >= numRows
                or c < 0
                or c >= numCols
                or (r, c) in path
                or grid[r][c] != "1"
            ):
                return
            grid[r][c] = "X"
            path.add((r, c))
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        count = [0]
        for r in range(numRows):
            for c in range(numCols):
                if grid[r][c] == "1":
                    count[0] += 1
                    dfs(r, c)

        return count[0]
