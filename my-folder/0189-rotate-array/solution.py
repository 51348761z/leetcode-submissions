class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        def rotateHelper(l, r):
            while l < r:
                nums[l], nums[r] = nums[r], nums[l]
                l, r = l + 1, r - 1

        k %= len(nums)
        rotateHelper(0, len(nums) - 1)
        rotateHelper(0, k - 1)
        rotateHelper(k, len(nums) - 1)


