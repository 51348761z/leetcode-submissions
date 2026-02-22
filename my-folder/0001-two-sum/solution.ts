function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }
    map.set(n, i);
  }
  return [];
}
