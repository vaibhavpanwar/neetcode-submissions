class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let result: number[][] = [];

        function combination(
            ind: number,
            target: number,
            temp: number[],
        ) {
            // when index is reached we have to check on any pick non pick choice wether we have resached the targett
            if (ind === nums.length) {
                target === 0 && result.push([...temp]);
                return;
            }

            // PICK --> we can only pickk when the desired result is less than zero
            if (target - nums[ind] >= 0) {
                // add the pick to the ds
                temp.push(nums[ind]);
                combination(ind,  target - nums[ind],  temp);
                // remove the added element for non pick choice
                temp.pop();
            }
            combination(ind + 1,  target,  temp);
        }

        combination(0, target,  []);
        return result;
    }
}
