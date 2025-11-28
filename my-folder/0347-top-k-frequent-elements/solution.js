/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }
  const maxCount = Math.max(...countMap.values());

  const buckets = Array.from({ length: maxCount + 1 }, () => []);
  for (const [num, count] of countMap) {
    buckets[count].push(num);
  }

  const ans = [];
  for (let i = maxCount; i >= 0 && ans.length < k; --i) {
    ans.push(...buckets[i]);
  }

  return ans.slice(0, k);
};
