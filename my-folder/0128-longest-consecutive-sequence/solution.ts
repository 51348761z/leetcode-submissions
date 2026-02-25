function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;
  for (const n of set) {
    if (!set.has(n - 1)) {
      let length = 1;
      while (set.has(n + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}
