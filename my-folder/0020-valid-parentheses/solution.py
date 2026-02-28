class Solution:
    def isValid(self, s: str) -> bool:
        openToClost = {"(": ")", "[": "]", "{": "}"}
        stack = []
        for c in s:
            if c in openToClost:
                stack.append(openToClost[c])
            else:
                if stack and stack[-1] == c:
                    stack.pop()
                else:
                    return False
        return len(stack) == 0


