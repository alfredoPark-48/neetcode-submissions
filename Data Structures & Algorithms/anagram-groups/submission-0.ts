class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map();
        for (const s of strs) {
            const count = Array.from({ length: 26}, () => 0);
            for (const c of s) {
                count[c.charCodeAt(0) - 97] += 1;
            }
            const key = count.join(',');
            if (!res.has(key)) {
                res.set(key, []);
            }
            res.get(key).push(s);
        }
        return Array.from(res.values());
    }
}