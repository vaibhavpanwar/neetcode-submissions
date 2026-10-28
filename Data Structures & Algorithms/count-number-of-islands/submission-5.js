class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let numRows=grid.length
        let numCols=grid[0].length
        function dfs(r,c){
            if(r<0||c<0||c>=numCols||r>=numRows|| grid[r][c]!=='1'){
                return
            }

            grid[r][c]='X'
            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        }
        let count=0
        for(let r=0;r<numRows;r++){
            for(let c=0;c<numCols;c++){
                if(grid[r][c]=='1'){
                    count++
                    dfs(r,c)
                }
            }
        }
        return count
    }
}
