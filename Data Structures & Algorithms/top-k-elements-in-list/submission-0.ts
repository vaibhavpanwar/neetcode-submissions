class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
         let hash: Record<string, number> = {};
    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1
    }

    let bucket: number[][] = [];
    let result = [];

    for (let [key, frequency] of Object.entries(hash)) {
        if (bucket[frequency]) {
            bucket[frequency].push(Number(key))
        } else {
            bucket[frequency] = [Number(key)];

        }
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) { result.push(...bucket[i]) };
        if (result.length === k) break;
    }
    return result;
    }
}
