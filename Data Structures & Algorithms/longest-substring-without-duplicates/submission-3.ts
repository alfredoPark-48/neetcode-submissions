class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // const duplicates = new Map<string, number>();
        const duplicates = new Set<string>();
        let total = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const char = s[r];
            while (duplicates.has(char)) {
                duplicates.delete(s[l]);
                l++;
            }
            const currStrSize = (r - l) + 1;
            total = Math.max(currStrSize, total);
            duplicates.add(char);
        }

        return total;
    }
}
