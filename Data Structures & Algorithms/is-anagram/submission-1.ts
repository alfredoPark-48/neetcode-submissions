class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sfreq = new Map<string, number>();
        const tfreq = new Map<string, number>();

        for (const char of s) {
            sfreq.set(char, (sfreq.get(char) || 0) + 1)
        }

        for (const char of t) {
            tfreq.set(char, (tfreq.get(char) || 0) + 1);
        }

        for (const [char, freq] of sfreq.entries()) {
            if (!tfreq.has(char) || tfreq.get(char) !== freq) {
                return false;
            }
        }

        for (const [char, freq] of tfreq.entries()) {
            if (!sfreq.has(char) || sfreq.get(char) !== freq) {
                return false;
            }
        }

        return true;
    }
}
