class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq={}

        for(let num of nums){
            freq[num]=(freq[num]||0)+1
        }

        let bucket=[]
        let result=[]
        for(let [key,f] of Object.entries(freq)){
            if(bucket[f]) bucket[f].push(key)
            else bucket[f]=[key]
        }
   
        
        for(let i=bucket.length-1;i>=0;i--){
            if(bucket[i]) result.push(...bucket[i])
            if(result.length===k) return result
        }
    }
}
