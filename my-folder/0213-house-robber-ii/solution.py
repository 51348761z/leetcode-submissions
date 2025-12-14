class Solution:
    def rob(self, nums: List[int]) -> int:
        return max(nums[0], self.robHepler(
            nums[1:]), self.robHepler(nums[:-1]))

    def robHepler(self, nums):
        prev, curr = 0, 0
        for n in nums:
            prev, curr = curr, max(prev + n, curr)
        return curr

