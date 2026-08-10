class TrieNode {
  children = new Map<string, TrieNode>();
  isEnd = false;
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let cur = this.root;
    for (const c of word) {
      let next = cur.children.get(c);
      if (!next) {
        next = new TrieNode();
        cur.children.set(c, next);
      }
      cur = next;
    }
    cur.isEnd = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (const c of word) {
      let next = cur.children.get(c);
      if (!next) {
        return false;
      }
      cur = next;
    }
    return cur.isEnd;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (const c of prefix) {
      let next = cur.children.get(c);
      if (!next) {
        return false;
      }
      cur = next;
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
