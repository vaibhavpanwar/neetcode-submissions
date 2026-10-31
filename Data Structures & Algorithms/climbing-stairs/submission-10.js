class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let p1=1,p2=1
        for(let i=2;i<=n;i++){
            let temp=p1+p2
            p1=p2
            p2=temp
        }
        return p2
    }
}
