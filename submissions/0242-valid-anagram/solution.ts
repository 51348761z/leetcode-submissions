function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const counterArray = Array(26).fill(0);
  for (let index = 0; index < s.length; index++) {
    const sCharCode = s.charCodeAt(index) - "a".charCodeAt(0);
    const tChatCode = t.charCodeAt(index) - "a".charCodeAt(0);
    counterArray[sCharCode] += 1;
    counterArray[tChatCode] -= 1;
  }

  return !counterArray.some((counter) => counter != 0);
}
