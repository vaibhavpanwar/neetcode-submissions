class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let mapping = {
            "}": "{",
            "]": "[",
            ")": "(",
        };
        let stack=[]
        let openings=Object.values(mapping)
        for(let c of s){
            if(openings.includes(c)){
                stack.push(c)
            }else{
                let current=stack.pop()
                if(mapping[c] !== current) return false
                
            }
        }
        return stack.length===0
    }
}
