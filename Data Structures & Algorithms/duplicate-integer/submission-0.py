class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for n in nums:
            if map.get(n, False):
                return True
            map[n] = True
        return False