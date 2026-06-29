class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);

        let res = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            let lastInterval = res[res.length - 1];
            let [newStart, newEnd] = intervals[i];
            let [currStart, currEnd] = lastInterval;

            if (newStart >= currStart && newStart <= currEnd) {
                res[res.length - 1] = [Math.min(newStart, currStart), Math.max(newEnd, currEnd)];
            } else {
                res.push(intervals[i]);
            }
        }
        return res;
    }
}
