class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        a: int = 0
        for n in nums:
            a ^= n
        return a


