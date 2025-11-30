class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        map = {}
        for n in nums:
            if map.get(n, False):
                return True
            map[n] = True
        return False

