function dailyTemperatures(temperatures: number[]): number[] {
  const results: number[] = Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let index = 0; index < temperatures.length; index++) {
    while (
      stack.length > 0 &&
      temperatures[index] > temperatures[stack.at(-1)!]
    ) {
      const previousDayIndex = stack.pop()!;
      results[previousDayIndex] = index - previousDayIndex;
    }
    stack.push(index);
  }

  return results;
}
