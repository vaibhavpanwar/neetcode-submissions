class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        function heapifyPush(arr: number[], val: number) {
            arr.push(val);
            let index = arr.length - 1;
            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);
                if (arr[parent] < arr[index]) {
                    [arr[parent], arr[index]] = [arr[index], arr[parent]];
                    index = parent;
                } else {
                    break;
                }
            }
        }
        let freq: Record<string, number> = {},
            pq: number[] = [];
        for (let t of tasks) {
            freq[t] = (freq[t] || 0) + 1;
        }
        for (let key in freq) {
            heapifyPush(pq, freq[key]);
        }
        let count = 0;
        while (pq.length) {
            let cycle = n + 1,
                localStore = [],
                taskCount = 0;

            while (cycle > 0 && pq.length) {
                let max = pq.shift();
                if (max! > 1) {
                    localStore.push(max! - 1);
                }
                taskCount++;
                cycle--;
            }

            for (let s of localStore) {
                heapifyPush(pq, s);
            }
            // count idle times
            count += pq.length === 0 ? taskCount : n + 1;
        }

        return count;
    }
}
