class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    #WORD_SEPERATOR = "#";
    encode(strs: string[]): string {
        let resultStr = "";

        for (let word of strs) {
            resultStr += `${word.length}${this.#WORD_SEPERATOR}${word}`;
        }

        return resultStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(!str) return []
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            // we will find our delimitter and then skip the words to the number before delimitter
            while (str[j] !== this.#WORD_SEPERATOR) {
                j++;
            }

            //now j is at index jaha pe pehla delimitter hai mtlb next index se word shuru hoga
            let wordLength = Number(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + wordLength);
            result.push(word);
            i = j + wordLength + 1;
        }

        return result;
    }
}
