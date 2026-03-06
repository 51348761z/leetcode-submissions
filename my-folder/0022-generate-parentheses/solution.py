class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        parentheses = []

        def backtracking(openN, closedN):
            if openN == closedN == n:
                res.append("".join(parentheses))
                return

            if openN < n:
                parentheses.append("(")
                backtracking(openN + 1, closedN)
                parentheses.pop()

            if closedN < openN:
                parentheses.append(")")
                backtracking(openN, closedN + 1)
                parentheses.pop()

        backtracking(0, 0)
        return res


