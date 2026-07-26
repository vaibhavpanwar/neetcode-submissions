class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        p = set()
        a = set()
        numRows = len(heights)
        numCols = len(heights[0])

        def check(r, c, ds, current_height):
            if (
                r < 0
                or c < 0
                or c >= numCols
                or r >= numRows
                or (r, c) in ds
                or current_height > heights[r][c]
            ):
                return
            current_height = heights[r][c]
            ds.add((r, c))
            check(r - 1, c, ds, current_height)
            check(r + 1, c, ds, current_height)
            check(r, c - 1, ds, current_height)
            check(r, c + 1, ds, current_height)

        for r in range(numRows):
            check(r, 0, p, heights[r][0])
            check(r, numCols - 1, a, heights[r][numCols - 1])

        for c in range(numCols):
            check(0, c, p, heights[0][c])
            check(numRows - 1, c, a, heights[numRows - 1][c])
        
        result=[]
        
        for r,c in a:
            if (r,c) in p: result.append([r,c])
        return result
