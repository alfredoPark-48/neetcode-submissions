class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (!s.length || !t.length || s.length !== t.length) return false;
        
        const duplicates = Array.from({ length: 26 }, () => 0); 
        for (let i = 0; i < s.length; i++) {
            const sKey = s[i].charCodeAt(0) - 97;
            const tKey = t[i].charCodeAt(0) - 97;

            duplicates[sKey]++;
            duplicates[tKey]--;
        }

        return duplicates.every((e) => e === 0);
    }
}
