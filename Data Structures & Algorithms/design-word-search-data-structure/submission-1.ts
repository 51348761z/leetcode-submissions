class TrieNode {
  children = new Map<string, TrieNode>();
  isWord = false;
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
    let currentNode = this.root;
    for (const char of word) {
      let nextNode = currentNode.children.get(char);
      if (!nextNode) {
        nextNode = new TrieNode();
        currentNode.children.set(char, nextNode);
      }
      currentNode = nextNode;
    }
    currentNode.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word: string): boolean {
    const dfs = (position: number, node: TrieNode): boolean => {
      // 1. Match
      if (position === word.length) {
        return node.isWord;
      }
      const currentChar = word[position];
      // 2. dot situation
      if (currentChar === ".") {
        // traverse each child
        for (const child of node.children.values()) {
          if (dfs(position + 1, child)) {
            return true;
          }
        }
        // No one child produces a match
        return false;
      }
      // 3. normal comparison
      const child = node.children.get(currentChar);
      if (!child) {
        return false;
      }
      return dfs(position + 1, child);
    };

    return dfs(0, this.root);
  }
}
