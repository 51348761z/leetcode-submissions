function decodeString(s: string): string {
  const stack: Array<[previousText: string, repeatCount: number]> = [];
  let currentText = "";
  let currentNumber = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "[") {
      stack.push([currentText, currentNumber]);
      currentText = "";
      currentNumber = 0;
    } else if (char === "]") {
      const [previousText, repeatCount] = stack.pop()!;
      currentText = previousText + currentText.repeat(repeatCount);
    } else {
      currentText += char;
    }
  }

  return currentText;
}
