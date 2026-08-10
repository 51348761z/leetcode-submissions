class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def backtracking(i, curr, total):
            if total == target:
                res.append(curr)
                return
            if i >= len(nums) or total > target:
                return
            
            backtracking(i, curr + [nums[i]], total + nums[i])
            backtracking(i + 1, curr, total)

        backtracking(0, [], 0)
        return res