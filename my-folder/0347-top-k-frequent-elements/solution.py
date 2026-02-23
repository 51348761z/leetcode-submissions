class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency = {}
        bucket = [[] for _ in range(len(nums) + 1)]
        for n in nums:
            frequency[n] = frequency.get(n, 0) + 1
        for n, c in frequency.items():
            bucket[c].append(n)

        res = []
        for i in range(len(bucket) - 1, 0, -1):
            for num in bucket[i]:
                res.append(num)
                if len(res) == k:
                    return res
        return res


