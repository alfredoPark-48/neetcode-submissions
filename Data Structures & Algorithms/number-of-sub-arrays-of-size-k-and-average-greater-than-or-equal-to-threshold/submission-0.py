class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        result = 0
        current_sum = sum(arr[:k-1])
        
        for L in range(len(arr) - k + 1):
            current_sum += arr[L + k - 1]
            if current_sum / k >= threshold:
                result += 1
            current_sum -= arr[L]
        return result