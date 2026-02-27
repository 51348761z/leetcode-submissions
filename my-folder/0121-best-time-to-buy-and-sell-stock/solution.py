class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit: int = 0
        minPrice: int = prices[0]
        for price in prices:
            if price < minPrice:
                minPrice = price
            maxProfit = max(maxProfit, price - minPrice)
        return maxProfit


