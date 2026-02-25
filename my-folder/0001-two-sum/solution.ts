function twoSum(nums: number[], target: number): number[] {
  const numIdxMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numIdxMap.has(diff)) {
      return [i, numIdxMap.get(diff)!];
    }
    numIdxMap.set(nums[i], i);
  }

  return [];
}
