class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
  let result: number[] = [];

    // for this we will simply utilise thim common sense product of array except itselft = product of elements to its right * product of element to its left
    // we will store products to left of element at given index
    // for example for a given array 
    // [2,3,4,5] --> product to left -->[1,2,6,24] -> iska mtlb given index pe uske left me sare elements ka product ky hai

    let left: number[] = [];
    let right: number[] = [];
    left[0] = 1 // we will fill left from beginning and right from end
    right[nums.length - 1] = 1 // this will be empty*(length-1), 1

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(left[i] * right[i])
    }


    return result;
    }
}
