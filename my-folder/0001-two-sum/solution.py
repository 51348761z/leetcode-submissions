class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        indices = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in indices:
                return [indices[diff], i]
            indices[n] = i

        return []

