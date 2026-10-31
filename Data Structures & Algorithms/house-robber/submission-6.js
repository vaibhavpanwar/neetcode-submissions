class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let m1=0,m2=0
        for(let num of nums){
            let temp=Math.max(m1+num, m2)
            m1=m2
            m2=temp
        }
        return m2
    }
}
