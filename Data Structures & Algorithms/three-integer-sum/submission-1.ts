class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
     let result: number[][] = []
    /*
    num3=-(num1+num2) basic maths
    ham ky krenge hashing or 2 pointers use krenge
    i=0 j=i+1 se shuru krenge 
    i or j k beech k elements ham hash me rkhenge 
    -(num[i]+num[j]) ye element agar hame hashmap me mila to triplet hai nahi to num[j] ko hashmap me bhrdenge
    hr ek iteration pe hashmap khali krdenge
    */
    let hashMap = new Map<number, boolean>()
    let s = new Set<string>();

    for (let i = 0; i < nums.length; i++) {
        hashMap.clear()
        for (let j = i + 1; j < nums.length; j++) {
            let thirdNum = -(nums[i] + nums[j])
            if (hashMap.has(thirdNum)) {
                //triplet bangya
                let tempArr = [nums[i], nums[j], thirdNum]
                let key = tempArr.sort((a, b) => a - b).join('-');
                if (!s.has(key)) {
                    result.push(tempArr);
                    s.add(key)
                }
            } else {
                hashMap.set(nums[j], true)
            }

        }
    }

    return result;
    }
}
