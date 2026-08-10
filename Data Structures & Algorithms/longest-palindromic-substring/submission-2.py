class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        
        for i in range(len(s)):
            res = max(res, self.helper(s, i, i), self.helper(s, i, i + 1), key=len)

        return res
    
    def helper(self, s, l, r):
        res = ""
        n = len(s)
        while l >= 0 and r < n and s[l] == s[r]:
            res = max(res, s[l:r + 1], key=len)
            l -= 1
            r += 1
        return res

    

