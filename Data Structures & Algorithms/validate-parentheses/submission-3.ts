class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
           const mapping: Record<string, string> = {
            "]": "[",
            "}": "{",
            ")": "(",
        };
        let stack: string[] = [];
        let openingBrackets = Object.values(mapping);
        for (let i of s) {
            if (openingBrackets.includes(i)) {
                stack.push(i);
            } else {
                let current = stack.pop();
                console.log(current);
                if (mapping[i] !== current) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
