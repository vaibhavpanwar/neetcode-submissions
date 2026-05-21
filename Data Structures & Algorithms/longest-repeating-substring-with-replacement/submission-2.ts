class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
      let maxLength=0
        for(let i=0; i<s.length;i++){
            let hash={}// store number against eacch frequency 
            let maxFrequency=0;

            for(let j=i;j<s.length;j++){
                hash[s[j]]=(hash[s[j]]||0)+1;
                maxFrequency=Math.max(maxFrequency, hash[s[j]]);
                let actions=(j-i+1)-maxFrequency;
                if(actions <=k){
                    maxLength=Math.max(maxLength, (j-i+1))
                }else{
                   break;
                }
                // hme check krna hai current substring in action kitna max result de skti hai 
                // lets check it
            }
        }
        return maxLength;
    }
}
