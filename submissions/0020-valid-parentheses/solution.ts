function isValid(s: string): boolean {
  const expectedBracket: Record<string, string> = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack: string[] = [];
  for (const c of s) {
    if (c in expectedBracket) {
      stack.push(expectedBracket[c]);
    } else {
      const top = stack.pop();
      if (!top || top !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
