function topKFrequent(nums: number[], k: number): number[] {
  const counters = new Map<number, number>();
  for (const n of nums) {
    counters.set(n, (counters.get(n) ?? 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, frequency] of counters.entries()) {
    buckets[frequency].push(num);
  }

  const result: number[] = [];

  for (let index = buckets.length - 1; index > 0; --index) {
    const candidates = buckets[index];
    for (const n of candidates) {
      result.push(n);
      if (result.length === k) {
        return result;
      }
    }
  }
  return result;
}
