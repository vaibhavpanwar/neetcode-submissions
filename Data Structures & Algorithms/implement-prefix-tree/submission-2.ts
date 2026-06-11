class PrefixNode {
    children: PrefixNode[] | null[];
    isEOW: boolean;
    constructor() {
        this.children = Array.from({ length: 26 }, () => null);
        this.isEOW = false;
    }
}
class PrefixTree {
    root: PrefixNode | null;
    constructor() {
        this.root = new PrefixNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (current.children[index] === null) {
                current.children[index] = new PrefixNode();
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
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (current.children[index] === null) {
                return false;
            }
            current = current.children[index];
        }
        return current.isEOW;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let index = prefix.charCodeAt(i) - 97;
            if (current.children[index] === null) {
                return false;
            }
            current=current.children[index]
        }
        return true;
    }
}
