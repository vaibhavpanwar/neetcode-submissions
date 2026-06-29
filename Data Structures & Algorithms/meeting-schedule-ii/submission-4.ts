/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        if (!intervals.length) return 0;
        let minPQ = new MinPriorityQueue();
        intervals = intervals.sort((a, b) => a.start - b.start);
        minPQ.push(intervals[0].end);
        //{9,10,14}
        for (let i = 1; i < intervals.length; i++) {
            let { start, end } = intervals[i];
            let minRoom = minPQ.front()
            if (minRoom <= start) {
                minPQ.pop();
            }
            minPQ.push(end);
        }
        return minPQ.size();
    }
}
