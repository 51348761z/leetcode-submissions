class TrieNode {
    children = new Map<string, TrieNode>()
    isEnd = false
}

class PrefixTree {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.root
        for (const c of word) {
            let next = cur.children.get(c)
            if (!next) {
                next = new TrieNode()
                cur.children.set(c, next)
            }
            cur = next
        }
        cur.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.root
        for (const c of word) {
            let next = cur.children.get(c)
            if (!next) {
                return false
            }
            cur = next
        }
        return cur.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.root
        for (const c of prefix) {
            let next = cur.children.get(c)
            if (!next) {
                return false
            }
            cur = next
        }
        return true
    }
}
