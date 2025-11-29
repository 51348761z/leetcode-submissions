/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let [counter, total] = [0, 0];

  for (const num of nums) {
    total += num;

    counter += map.get(total - k) ?? 0;
    map.set(total, (map.get(total) ?? 0) + 1);
  }
  return counter;
};
