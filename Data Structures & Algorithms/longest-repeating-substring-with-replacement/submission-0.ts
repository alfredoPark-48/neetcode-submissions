class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let freq = new Map<string, number>();
        let max = 0;

        for (let r = 0; r < s.length; r++) {
            const curr = s[r];
            freq.set(curr, (freq.get(curr) || 0) + 1);

            while (((r-l)+1) - Math.max(...freq.values()) > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                if (freq.get(s[l]) === 0) freq.delete(s[l]);
                l++;
            }

            const currSize = (r - l) + 1;
            max = Math.max(currSize, max);
        }

        return max;
    }
}
