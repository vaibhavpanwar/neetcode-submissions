class TrieNode {
    children: TrieNode[];
    isEOW: boolean;
    constructor() {
        this.children = Array.from({ length: 26 }, () => null);
        this.isEOW = false;
    }
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (current.children[index] === null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        current.isEOW = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        function dfs(j: number, root: TrieNode) {
            let current = root;
            for (let i = j; i < word.length; i++) {
                let char = word[i];

                if (char === ".") {
                    let validChildren = current.children.filter((el) => el !== null);
                    for (let validChild of validChildren) {
                        if (dfs(i + 1, validChild)) return true;
                    }
                    return false;
                } else {
                    let index = word.charCodeAt(i) - 97;
                    if (current.children[index] === null) return false;
                    current = current.children[index];
                }
            }
            return current.isEOW;
        }

        return dfs(0, this.root);
    }
}
