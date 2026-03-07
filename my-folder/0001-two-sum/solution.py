

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numToIdx = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in numToIdx:
                return [i, numToIdx.get(diff)]
            numToIdx[n] = i
        return []


