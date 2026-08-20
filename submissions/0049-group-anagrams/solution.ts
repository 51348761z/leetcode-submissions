function groupAnagrams(strs: string[]): string[][] {
  const groupsBySignature = new Map<string, string[]>();
  const lowercaseACode = "a".charCodeAt(0);

  for (const str of strs) {
    const letterCounts = new Array<number>(26).fill(0);

    for (const char of str) {
      const letterIndex = char.charCodeAt(0) - lowercaseACode;
      letterCounts[letterIndex]++;
    }

    const signature = letterCounts.join("#");
    const group = groupsBySignature.get(signature) ?? [];
    group.push(str);
    groupsBySignature.set(signature, group);
  }

  return [...groupsBySignature.values()];
}
