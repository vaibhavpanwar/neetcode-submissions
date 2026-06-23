class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodingsMeraNaiveSolution(s: string): number {
        if (s.startsWith("0")) return 0;
        let count = 0;
        function check(str: string) {
            if (str.length === 0) {
                count++;
                return;
            }
            let first = str.slice(0, 1);
            if (first == "0") return;
            if (Number(first) < 27 && Number(first) > 0) {
                check(str.slice(1));
            }

            if (str.length >= 2) {
                let second = str.slice(0, 2);
                if (Number(second) < 27 && Number(second) >= 0) {
                    check(str.slice(2));
                }
            }
        }

        check(s);
        return count;
    }
    numDecodingsR(s: string): number {
        if (s.startsWith("0")) return 0;
        let count = 0;
        function check(i: number) {
            if (s.length === i) {
                count++;
                return;
            }
            if (s[i] === "0") return;

            //pick 1 and keep picking 1 1 characters till we can
            check(i + 1);
            /*
                check(0)
                ├── check(1)
                │   ├── check(2)
                │   │   └── check(3) ✅
                │   └── check(3) ✅
                └── check(2)
                    └── check(3) ✅

                DFS hota hai.

                Pehle poori left branch complete hoti hai, phir backtracking hoti hai, fir right branch.
           */
            if (i + 1 < s.length) {
                let second = Number(s[i] + s[i + 1]);
                if (second >= 10 && second < 27) {
                    check(i + 2);
                }
            }
        }

        check(0);
        return count;
    }

    numDecodings(s: string): number {
        let dp = [];
        function check(i: number) {
            if (s.length === i) return 1;
            if (s[i] === "0") return 0;
            if (dp[i] !== undefined) return dp[i];
            let ways = check(i + 1);

            if (i + 1 < s.length) {
                let second = Number(s[i] + s[i + 1]);
                if (second >= 10 && second < 27) {
                    ways += check(i + 2);
                }
            }
            dp[i] = ways;
            return ways;
        }

        return check(0);
    }
}
