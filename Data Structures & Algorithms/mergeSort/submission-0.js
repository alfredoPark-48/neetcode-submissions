/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * Entry point for the Merge Sort algorithm
     * @param {Pair[]} pairs Array of Pair objects to be sorted
     * @returns {Pair[]} Sorted array of Pair objects
     */
    mergeSort(pairs) {
        return this.mergePairs(pairs, 0, pairs.length - 1);
    }

    /**
     * Helper function for the Merge Sort algorithm
     * @param {Pair[]} pairs Array of Pair objects to be sorted
     * @param {number} s Start index for the sorting
     * @param {number} e End index for the sorting
     * @returns {Pair[]} Sorted subarray of Pair objects
     */
    mergePairs(pairs, s, e) {
        if (e - s + 1 <= 1) {
            return pairs;
        }

        const m = Math.floor((s + e) / 2);

        // Sort the left subarray
        this.mergePairs(pairs, s, m);

        // Sort the right subarray
        this.mergePairs(pairs, m + 1, e);

        // Merge the sorted subarrays
        this.merge(pairs, s, m, e);

        return pairs;
    }

    /**
     * Function to merge two sorted subarrays into one sorted array
     * @param {Pair[]} arr The array containing the subarrays to be merged
     * @param {number} s Start index of the first subarray
     * @param {number} m End index of the first subarray and start index of the second subarray
     * @param {number} e End index of the second subarray
     */
    merge(arr, s, m, e) {
        const L = arr.slice(s, m + 1);
        const R = arr.slice(m + 1, e + 1);

        let i = 0;
        let j = 0;
        let k = s;

        // Merge the subarrays
        while (i < L.length && j < R.length) {
            if (L[i].key <= R[j].key) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}
