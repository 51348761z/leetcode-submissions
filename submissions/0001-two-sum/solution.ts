function twoSum(nums: number[], target: number): number[] {
  const indexByNumber = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    const complementIndex = indexByNumber.get(complement);

    if (complementIndex !== undefined) {
      return [index, complementIndex];
    }

    indexByNumber.set(nums[index], index);
  }

  return [];
}
