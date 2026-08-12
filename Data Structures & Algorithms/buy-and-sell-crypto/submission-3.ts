class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0;
        let l = 0;
        for (let r = 1; r < prices.length; r++) {
            if (prices[l] > prices[r]) {
                l = r;
            } else {
                const currProfit = prices[r] - prices[l];
                result = Math.max(currProfit, result);    
            }  
        }

        return result;
    }
}
