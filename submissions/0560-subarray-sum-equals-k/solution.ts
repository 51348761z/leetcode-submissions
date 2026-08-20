function subarraySum(nums: number[], k: number): number {
  const prefixFrequencies = new Map<number, number>([[0, 1]]);
  let count = 0;
  let prefixSum = 0;

  for (const n of nums) {
    prefixSum += n;
    count += prefixFrequencies.get(prefixSum - k) ?? 0;

    prefixFrequencies.set(
      prefixSum,
      (prefixFrequencies.get(prefixSum) ?? 0) + 1,
    );
  }

  return count;
}
