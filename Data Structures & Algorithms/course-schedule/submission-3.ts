class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
     let adjacenyList: Record<number, number[]> = {};
  let visited = new Set<number>();

  for (let i = 0; i < numCourses; i++) adjacenyList[i] = [];

  for (let [course, pre] of prerequisites) adjacenyList[course].push(pre);

  function dfs(course: number): boolean {
    if (visited.has(course)) return false;
    if (!adjacenyList[course].length) return true;
    visited.add(course);
    for (let pre of adjacenyList[course]) {
      if (!dfs(pre)) return false;
    }
    visited.delete(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
    }
}
