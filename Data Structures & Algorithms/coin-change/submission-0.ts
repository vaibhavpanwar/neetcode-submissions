class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        let minWays = -1;
        function check(i: number, target: number, numElements: number) {
            if (i === coins.length) {
                if (target === 0) {
                    if (minWays === -1) {
                        minWays = numElements;
                    } else {
                        minWays = Math.min(minWays, numElements);
                    }
                }
                return;
            }
            if(coins[i]<=target){
                //pick
                check(i, target-coins[i],++numElements)
                --numElements
            }
            check(i+1,target,numElements)
        }
        check(0, amount, 0);
        return minWays;
    }
}
