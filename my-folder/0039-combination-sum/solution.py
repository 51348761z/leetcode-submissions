
class Solution:
    def combinationSum(
            self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def backtracking(i, curr, total):
            if total == target:
                res.append(curr)
                return
            if i >= len(candidates) or total > target:
                return

            backtracking(i, curr + [candidates[i]], total + candidates[i])

            backtracking(i + 1, curr, total)

        backtracking(0, [], 0)

        return res

