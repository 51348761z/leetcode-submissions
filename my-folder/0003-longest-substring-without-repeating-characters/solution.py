class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len = 0
        stored = set()

        l = 0
        for r in range(len(s)):
            while s[r] in stored:
                stored.remove(s[l])
                l += 1
            stored.add(s[r])
            max_len = r - l + 1 if r - l + 1 > max_len else max_len
        return max_len


