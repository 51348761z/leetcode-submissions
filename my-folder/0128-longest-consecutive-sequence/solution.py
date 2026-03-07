class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest = 0
        stored = set(nums)

        for n in stored:
            if n - 1 not in stored:
                length = 0
                while n + length in stored:
                    length += 1
                longest = max(longest, length)

        return longest


