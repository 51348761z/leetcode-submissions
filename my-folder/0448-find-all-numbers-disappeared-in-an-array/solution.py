class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for n in nums:
            idx = abs(n) - 1
            nums[idx] = -1 * abs(nums[idx])
        res = []
        for i, n in enumerate(nums):
            if n > 0:
                res.append(i + 1)
        return res


