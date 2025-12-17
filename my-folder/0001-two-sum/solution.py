import enum


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, n in enumerate(nums):
            if target - n in seen:
                return [i, seen.get(target - n, 0)]
            seen[n] = i
        return []

