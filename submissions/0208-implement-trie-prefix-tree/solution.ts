class TrieNode {
  children = new Map<string, TrieNode>();
  isWord: boolean = false;
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      let nextNode = currentNode.children.get(char);
      if (!nextNode) {
        nextNode = new TrieNode();
      }
      currentNode.children.set(char, nextNode);
      currentNode = nextNode;
    }

    currentNode.isWord = true;
  }

  search(word: string): boolean {
    let currentNode = this.root;
    for (const char of word) {
      const nextNode = currentNode.children.get(char);
      if (!nextNode) return false;

      currentNode = nextNode;
    }

    return currentNode.isWord;
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root;
    for (const char of prefix) {
      const nextNode = currentNode.children.get(char);
      if (!nextNode) return false;

      currentNode = nextNode;
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
