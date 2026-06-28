class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        let result=[]
        for(let num=0;num<=n;num++){
            let count=0
            for(let i=0;i<32;i++){
                if(((1<<i)&num)!==0) count++
            }
            result.push(count)
        }    
        return result;
    }
}
