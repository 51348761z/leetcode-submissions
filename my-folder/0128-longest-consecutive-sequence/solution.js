/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const st = new Set(nums);

  ans = 0;
  for (const n of st) {
    if (st.has(n - 1)) {
      continue;
    }

    let next = n + 1;
    while (st.has(next)) {
      next++;
    }

    ans = Math.max(ans, next - n);
  }

  return ans;
};
