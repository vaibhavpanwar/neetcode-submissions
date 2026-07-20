class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        bucket = {}
        for s in strs:
            arr = [0]*26
            for c in s:
                ind = ord(c) - ord("a")
                print(ind,arr)
                arr[ind] += 1

            key=tuple(arr)
            if key in bucket:
                bucket[key].append(s)
            else:
                bucket[key] = [s]

        return list(bucket.values())
