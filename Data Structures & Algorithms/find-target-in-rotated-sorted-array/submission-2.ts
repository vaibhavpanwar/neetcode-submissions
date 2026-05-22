class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        let mid = Math.ceil((left + right) / 2);

        while (left <= right) {
            mid = Math.ceil((left + right) / 2);
            let middleElement = nums[mid];
            if (middleElement === target) return mid;

            if (nums[left] < middleElement) {
                // left side sorted hai ab check kro left me hai ye right me yaha se
                if (target >= nums[left] && target < middleElement) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target <= nums[right] && target > middleElement) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
