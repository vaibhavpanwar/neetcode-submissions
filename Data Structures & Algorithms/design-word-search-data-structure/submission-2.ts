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
        function check(i: number, root): boolean {
            let current = root;

            for (let j = i; j < word.length; j++) {
                if (word[j] === ".") {
                    let validChildren = current.children.filter((c) => c !== null);
                    for (let c of validChildren) {
                        if (check(j + 1, c)) return true;
                    }
                    return false;
                } else {
                    let idx = word[j].charCodeAt(0) - 97;
                    if (current.children[idx] === null) return false;
                    current = current.children[idx];
                }
            }
            return current.isEOW;
        }
        return check(0, this.root);
    }
}
