class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        dist, xor = 0, x ^ y
        while xor:
            xor &= xor - 1
            dist += 1
        return dist


