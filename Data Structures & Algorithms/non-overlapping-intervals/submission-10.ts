class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals1(intervals: number[][]): number {
        intervals.sort((a, b) => a[0] - b[0]);
        // we will use greedy approach
        // ha, last end value store krenge
        // agar ab agle element ki start value lasrt end se chhoti hai to mtlb overlap
        // ab overlap k case me ham bdi end wali value htadenge taki aage overlap k km chances ho or min wale ko chose krleenge
        let count = 0,
            lastEndVal = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            if (start >= lastEndVal) {
                //not overlapping;
                lastEndVal = end;
            } else {
                count++;
                lastEndVal = Math.min(lastEndVal, end);
            }
        }
        return count;
    }
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => a[0] - b[0]);
        // we will use greedy approach
        // ha, last end value store krenge
        // agar ab agle element ki start value lasrt end se chhoti hai to mtlb overlap
        // ab overlap k case me ham bdi end wali value htadenge taki aage overlap k km chances ho or min wale ko chose krleenge
        let count = 0,
            lastEndVal = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            if (start >= lastEndVal) {
                //not overlapping;
                lastEndVal = end;
            } else {
                count++;
                lastEndVal = Math.min(lastEndVal, end);
            }
        }
        return count;
    }
}
