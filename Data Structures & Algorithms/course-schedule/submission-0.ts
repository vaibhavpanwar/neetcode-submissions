class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let adjacencyList = {};
        let visited = new Set();
        for (let i = 0; i < numCourses; i++) adjacencyList[i] = [];
        for (let [course, pre] of prerequisites) {
            adjacencyList[course].push(pre);
        }

        function dfs(course) {
            if (!adjacencyList[course].length) return true;
            if (visited.has(course)) return false; // found a cycle
            visited.add(course);
            for (let pre of adjacencyList[course]) {
                if (!dfs(pre)) return false;
            }
            visited.delete(course)
            return true
        }

        for(let i=0;i<numCourses;i++){
            if(!dfs(i)) return false
        }
        return true
    }
}
