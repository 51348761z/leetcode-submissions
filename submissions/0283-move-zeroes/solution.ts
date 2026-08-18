/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const length = nums.length;
  if (length === 0 || length === 1) {
    return;
  }

  let slow = 0;
  let fast = 0;

  while (fast < length) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
    fast++;
  }
}
