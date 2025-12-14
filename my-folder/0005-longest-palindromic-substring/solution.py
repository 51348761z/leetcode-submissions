class Solution:
    def helper(self, s, l, r):
        res = ""
        resLength = 0
        n = len(s)
        while l >= 0 and r < n and s[l] == s[r]:
            if (r - l + 1) > resLength:
                resLength = r - l + 1
                res = s[l:r + 1]
            l -= 1
            r += 1
        return res

    def longestPalindrome(self, s: str) -> str:
        res = ""
        for i in range(len(s)):
            s1 = self.helper(s, i, i)  # odd length
            s2 = self.helper(s, i, i + 1)  # even length
            res = max(res, s1, s2, key=len)
        return res


