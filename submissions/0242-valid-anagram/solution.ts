function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const aCode = "a".charCodeAt(0);

  const counts = Array<number>(26).fill(0);
  for (let index = 0; index < s.length; index++) {
    const sCharCode = s.charCodeAt(index) - aCode;
    const tCharCode = t.charCodeAt(index) - aCode;

    counts[sCharCode]++;
    counts[tCharCode]--;
  }

  return counts.every((count) => count === 0);
}
