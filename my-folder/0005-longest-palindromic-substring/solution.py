class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ""
        longest_len = 0
        for i in range(len(s)):
            # Odd case
            left = right = i
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if (right - left + 1) > longest_len:
                    longest_len = right - left + 1
                    longest = s[left : right + 1]
                left -= 1
                right += 1
            # even case
            left, right = i, i + 1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if (right - left + 1) > longest_len:
                    longest_len = right - left + 1
                    longest = s[left : right + 1]
                left -= 1
                right += 1

        return longest


