function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  let prefix = 1;
  for (let index = 0; index < nums.length; index++) {
    result[index] = prefix;
    prefix *= nums[index];
  }

  let postfix = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= postfix;
    postfix *= nums[index];
  }

  return result;
}
