class Solution:
    def isValid(self, s: str) -> bool:
        closeToOpen = {"(": ")", "{": "}", "[": "]"}
        stack = []

        for c in s:
            if c in closeToOpen:
                stack.append(closeToOpen[c])
            else:
                if stack and stack[-1] == c:
                    stack.pop()
                else:
                    return False
        return len(stack) == 0


