class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        let adjacencyList={};
        let visited=new Set();
        for(let i=0;i<n;i++) adjacencyList[i]=[]
        for(let [node, neighbour] of edges){
             adjacencyList[node].push(neighbour)
             adjacencyList[neighbour].push(node)
             }
             console.log(adjacencyList)
        function dfs(rootNode,parent){
            visited.add(rootNode)
            for(let neighbour of adjacencyList[rootNode]){
                if(neighbour===parent) continue;
                if(visited.has(neighbour)) return false
                if(!dfs(neighbour,rootNode)) return false
            }
            return true
        }
        if(!dfs(0,null)) return false;
        if(visited.size<n) return false;
        return true

    }
}
