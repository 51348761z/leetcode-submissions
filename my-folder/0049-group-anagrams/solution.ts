function groupAnagrams(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>();
  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join("#");
    if (!anagrams.has(key)) {
      anagrams.set(key, []);
    }
    anagrams.get(key)?.push(s);
  }
  return Array.from(anagrams.values());
}
