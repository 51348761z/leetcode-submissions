function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
