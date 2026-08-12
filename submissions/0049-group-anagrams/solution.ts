function groupAnagrams(strs: string[]): string[][] {
  const groupByCode = new Map<string, string[]>();

  for (const str of strs) {
    const indexByCode = Array(26).fill(0);
    const aCode = "a".charCodeAt(0);

    for (const char of str) {
      const charCode = char.charCodeAt(0) - aCode;
      indexByCode[charCode]++;
    }
    const key = indexByCode.join("#");

    const group = groupByCode.get(key) ?? [];
    group.push(str);
    groupByCode.set(key, group);
  }

  return Array.from(groupByCode.values());
}
