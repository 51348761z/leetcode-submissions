function longestConsecutive(nums: number[]): number {
  const numberSet = new Set(nums);
  let longest = 0;
  for (const n of numberSet) {
    if (numberSet.has(n - 1)) continue;

    let length = 1;
    while (numberSet.has(n + length)) length++;

    longest = Math.max(longest, length);
  }
  return longest;
}
