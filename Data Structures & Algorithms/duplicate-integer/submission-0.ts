class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
 hasDuplicate(nums: number[]): boolean {
    let seen=new Set()
    for(let num of nums){
        if(seen.has(num)) return true
        else seen.add(num);
    }
    return false
};
}
