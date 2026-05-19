class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
            let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            let length = Math.min(heights[i], heights[j])
            let breadth = j - i
            let area = breadth * length;
            maxArea = Math.max(area, maxArea)
        }
    }
    return maxArea
    }
}
