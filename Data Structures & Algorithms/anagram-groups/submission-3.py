class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        bucket = defaultdict(list)
        for s in strs:
            arr = [0] * 26
            for c in s:
                arr[ord(c) - ord("a")] += 1
            bucket[tuple(arr)].append(s)

        return list(bucket.values())
