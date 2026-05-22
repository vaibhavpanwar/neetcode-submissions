class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let mapping = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        let stack = [];

        for (let char of s) {
           if(Object.values(mapping).includes(char)){
            stack.push(char)
           }
           else{
            let lastBracket=stack.pop()
            if(mapping[char]!==lastBracket){
                return false
            }
           }
        }
        return stack.length===0
    }
}
