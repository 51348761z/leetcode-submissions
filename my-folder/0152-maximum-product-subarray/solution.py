class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        minn = maxx = nums[0]
        maximum_product = maxx
        for num in nums[1:]:
            minn, maxx = min(num, num * minn, num *
                             maxx), max(num, num * minn, num * maxx)
            maximum_product = max(maximum_product, maxx)
        return maximum_product


