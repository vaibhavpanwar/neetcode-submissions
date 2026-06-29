class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        let res = [];
        for (let i = 0; i < intervals.length; i++) {
            let [currStart, currEnd] = intervals[i];
            let [newStart, newEnd] = newInterval;
            //check if new interval is before current
            if (newEnd < currStart) {
                res = [...res, newInterval, ...intervals.slice(i)];
                return res;
            } else if (newStart > currEnd) {
                res.push(intervals[i]);
            } else {
                newInterval = [Math.min(currStart, newStart), Math.max(newEnd, currEnd)];
            }
        }
        res.push(newInterval);
        return res;
    }
}
