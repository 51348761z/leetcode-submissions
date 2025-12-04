class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        for c in s:
            if c in closeToOpen:
                stack.append(closeToOpen[c])
            else:
                if stack and stack[-1] == c:
                    stack.pop()
                else:
                    return False

        return True if not stack else False

