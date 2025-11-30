/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (const [idx, val] of nums.entries()) {
    if (idx > 0 && nums[idx - 1] === val) {
      continue;
    }
    let [l, r] = [idx + 1, nums.length - 1];
    while (l < r) {
      const threeSum = val + nums[l] + nums[r];
      if (threeSum > 0) {
        r -= 1;
      } else if (threeSum < 0) {
        l += 1;
      } else {
        res.push([val, nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return res;
};
