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
            array: number[],
            target: number,
            finalResult: number[][],
            temp: number[],
        ) {
            // when index is reached we have to check on any pick non pick choice wether we have resached the targett
            if (ind === array.length) {
                target === 0 && finalResult.push([...temp]);
                return;
            }

            // PICK --> we can only pickk when the desired result is less than zero
            if (target - array[ind] >= 0) {
                // add the pick to the ds
                temp.push(array[ind]);
                combination(ind, array, target - array[ind], finalResult, temp);
                // remove the added element for non pick choice
                temp.pop();
            }
            combination(ind + 1, array, target, finalResult, temp);
        }

        combination(0, nums, target, result, []);
        return result;
    }
}
