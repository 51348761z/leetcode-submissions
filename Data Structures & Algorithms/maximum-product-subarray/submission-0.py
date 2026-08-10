class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        minn = maxx = nums[0]
        max_p = maxx
        for num in nums[1:]:
            minn, maxx = min(num, num * minn, num * maxx), max(num, num * minn, num * maxx)
            max_p = max(max_p, maxx)
        return max_p