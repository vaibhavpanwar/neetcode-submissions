class TriNode {
    children: (TriNode | null)[];
    isEOW: boolean;
    constructor() {
        this.children = Array.from({ length: 26 }, () => null);
        this.isEOW = false;
    }

    addWord(word: string) {
        let current: TriNode = this;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (current.children[index] === null) {
                current.children[index] = new TriNode();
            }
            current = current.children[index];
        }
        current.isEOW = true;
    }
    addWords(words: string[]) {
        for (let w of words) {
            this.addWord(w);
        }
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        let numRows = board.length,
            numCols = board[0].length;
        let trieNode = new TriNode();
        trieNode.addWords(words);
        let result = new Set<string>();
        let path = new Set<string>();

        function dfs(r: number, c: number,  node: TriNode, word: string) {
            // out of bound to ni maamla
            if (r < 0 || c < 0 || r >= numRows || c >= numCols || path.has(`${r}-${c}`)) {
                return;
            }
            let index = board[r][c].charCodeAt(0) - 97;
            let newNode = node.children[index];
            if (!newNode) return;
            word += board[r][c];
            if (newNode.isEOW) result.add(word);
            path.add(`${r}-${c}`);
            dfs(r - 1, c, newNode, word);
            dfs(r + 1, c, newNode, word);
            dfs(r, c - 1, newNode, word);
            dfs(r, c + 1, newNode, word);
            path.delete(`${r}-${c}`);
            return;
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                dfs(row, col, trieNode, "");
            }
        }
        return [...result];
    }
}
