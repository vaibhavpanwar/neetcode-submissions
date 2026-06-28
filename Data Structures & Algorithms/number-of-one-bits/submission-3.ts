class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeightN(n: number): number {
        let count = 0;
        while (n) {
            // &1 tells if a number is even or odd
            if (n & 1) count++;
            // this shifts n to right side so we can check for next bit
            n = n >> 1;
        }
        return count;
    }
    hammingWeight2(n: number): number {
        let count = 0;
        for (let i = 0; i < 32; i++) {
            //masking sirf us bit pe 1 hoga baki sb jagah 0
            if ((1 << i) & n) count++;
        }
        return count;
    }
    hammingWeight(n: number): number {
        let count = 0;
        while (n) {
            count++;
            n = n & (n - 1);
        }
        return count;
    }
}
