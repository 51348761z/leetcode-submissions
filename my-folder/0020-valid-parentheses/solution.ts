function isValid(s: string): boolean {
  const closeToOpen: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack: string[] = [];

  for (const c of s) {
    if (c in closeToOpen) {
      stack.push(closeToOpen[c]);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
