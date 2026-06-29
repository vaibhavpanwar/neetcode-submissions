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
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        if (!intervals.length) return true;
        intervals = intervals.sort((a, b) => a.start - b.start);
        let lastMeetEnd = intervals[0].end;
        for (let i = 1; i < intervals.length; i++) {
            if (lastMeetEnd > intervals[i].start) return false;
            lastMeetEnd=intervals[i].end
        }
        return true;
    }
}
