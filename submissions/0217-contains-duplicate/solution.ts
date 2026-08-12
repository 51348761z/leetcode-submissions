function containsDuplicate(nums: number[]): boolean {
  const numberSet = new Set<number>();
  for (const n of nums) {
    if (!numberSet.has(n)) {
      numberSet.add(n);
      continue;
    }
    return true;
  }
  return false;
}
