function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sortedNums = nums.toSorted((a, b) => a - b);

  for (let index = 0; index < sortedNums.length - 2; index++) {
    if (sortedNums[index] > 0) break;
    if (index > 0 && sortedNums[index] === sortedNums[index - 1]) continue;

    let left = index + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const summ = sortedNums[index] + sortedNums[left] + sortedNums[right];

      if (summ < 0) {
        left++;
      } else if (summ > 0) {
        right--;
      } else {
        result.push([sortedNums[index], sortedNums[left], sortedNums[right]]);

        left++;
        right--;

        while (left < right && sortedNums[left - 1] === sortedNums[left]) {
          left++;
        }
        while (left < right && sortedNums[right] === sortedNums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
}
