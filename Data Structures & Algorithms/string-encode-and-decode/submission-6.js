class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res=''
        for(let st of strs){
            res+=`${st.length}#${st}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0
        let result=[]
        while(i<str.length){
            let j=i
            while(str[j]!=='#'){
                j++
            }
            let len=str.slice(i,j)
            let nextPoint=Number(len)+j+1
            result.push(str.slice(j+1,nextPoint))
            i=nextPoint
        }

        return result
    }
}
