function twoSum(nums: number[], target: number): number[] {
  const numberByIndex = new Map<number, number>();
  const length = nums.length;
  for (let index = 0; index < length; index++) {
    const diff = target - nums[index];
    const savedIndex = numberByIndex.get(diff);
    if (savedIndex !== undefined) {
      return [savedIndex, index];
    }

    numberByIndex.set(nums[index], index);
  }
  return [];
}
