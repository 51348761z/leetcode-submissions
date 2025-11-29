/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (const [i, n] of nums.entries()) {
    const complement = target - n;
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(n, i);
  }
  return [];
};
