class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1

        print(freq)
        bucket = [[] for _ in range(len(nums)+1)]

        for key, value in freq.items():
            bucket[value].append(int(key))

        results = []
        for i in range(len(nums) , -1, -1):
            if bucket[i] is not None:
                results.extend(bucket[i])
            if len(results) == k:
                return results
        return results
