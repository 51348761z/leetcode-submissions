/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (const [index, num] of nums.entries()) {
    const complement = target - num;
    if (map.has(complement)) {
      return [map.get(complement), index];
    }
    map.set(num, index);
  }
};
