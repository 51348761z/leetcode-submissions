class TrieNode {
  children = new Map<string, TrieNode>();
  isWord = false;
}
class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur = this.root;
    for (const char of word) {
      let next = cur.children.get(char);
      if (!next) {
        next = new TrieNode();
        cur.children.set(char, next);
      }
      cur = next;
    }
    cur.isWord = true;
  }

  search(word: string): boolean {
    const dfs = (position: number, node: TrieNode): boolean => {
      // 1. Match
      if (position === word.length) {
        return node.isWord;
      }

      // 2. dot case
      const char = word[position];
      if (char === ".") {
        // traverse each child
        for (const child of node.children.values()) {
          if (dfs(position + 1, child)) {
            return true;
          }
        }
        return false; // no even one child has matched
      }

      // 3. normal iteration
      const child = node.children.get(char);
      if (!child) {
        return false;
      }
      return dfs(position + 1, child);
    };

    return dfs(0, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
