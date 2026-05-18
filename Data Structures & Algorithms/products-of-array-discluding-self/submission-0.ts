class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        function getProduct(arr: number[]): number {
            let totalProduct = arr.reduce((acc, element) => {
                return acc * element;
            }, 1);
            return totalProduct;
        }
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            let currentProduct = getProduct(nums.slice(0, i)) * getProduct(nums.slice(i + 1, nums.length));
            result.push(currentProduct);
        }
        return result;
    }
}
