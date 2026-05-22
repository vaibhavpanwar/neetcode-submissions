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
        let opening = Object.values(mapping);
        for (let char of s) {
           if(opening.includes(char)){
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
