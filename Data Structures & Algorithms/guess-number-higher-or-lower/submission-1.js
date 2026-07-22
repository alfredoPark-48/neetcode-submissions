/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let L = 0;
        let R = n;

        while (L <= R) {
            const mid = Math.floor((L + R) / 2);
            const pick = guess(mid);

            if (pick > 0) {
                L = mid + 1
            } else if (pick < 0) {
                R = mid - 1
            } else {
                return mid;
            }
        }
    }
}
