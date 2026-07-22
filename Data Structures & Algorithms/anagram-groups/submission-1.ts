class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map();

        for (const s of strs) {
            const count = new Uint8Array(26);
            for (const c of s) {
                count[c.charCodeAt(0) - 97] += 1;
            }
            const key = String(count);
            if (!res.has(key)) res.set(key, []);
            res.get(key).push(s);
        }

        return Array.from(res.values());
    }
}
