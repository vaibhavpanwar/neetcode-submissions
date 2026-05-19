class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitBrute(prices: number[]): number {
        // this is brute force 
        /*
        isme ham hr ek din ko future k din se compare krenge 
        or jo max profit hoga return krdenge

        */
        let maxProfit=0
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++){
                let profit=prices[j]-prices[i];
                maxProfit=Math.max(profit,maxProfit)
            }
        }

        return maxProfit

    }
// 2 pointer/ sliding window
    maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let left = 0
    let right = left + 1;
    while (left < right && right < prices.length) {
        if (prices[right] < prices[left]) {
            // this is better buying option
            left = right;
        } else {
            let currentProfit = prices[right] - prices[left];
            maxProfit = Math.max(currentProfit, maxProfit)
        }
        right++
    }


    return maxProfit
}
}
