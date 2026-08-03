class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (!/^[a-z0-9]$/i.test(s[l]) && l < r) {
                l++
            }
            while (!/^[a-z0-9]$/i.test(s[r]) && l < r) {
                r--;
            }
            
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
