class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const duplicates = new Map<string, string[]>();
        for (const str of strs) {
            const charArr = Array.from({ length: 26 }, () => 0);
            for (const char of str) {
                const key = char.charCodeAt(0) - 97;
                charArr[key]++;
            }
            const strKey = charArr.join();
            if (!duplicates.has(strKey)) {
                duplicates.set(strKey, []);
            }
            duplicates.get(strKey).push(str);
           
        }
        return Array.from(duplicates.values());
    }
}
