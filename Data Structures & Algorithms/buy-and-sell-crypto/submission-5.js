class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bestBuy = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            bestBuy = Math.min(prices[i], bestBuy);
            maxProfit = Math.max(maxProfit, prices[i] - bestBuy);
        }
        return maxProfit;
    }
}
