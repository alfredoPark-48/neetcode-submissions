class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        window_length = 0
        L = 0
        total = len(nums) + 1

        for R in range(len(nums)):
            window_length += nums[R]
            while window_length >= target:
                total = min(R - L + 1, total) # R - l + 1 is the length of the window
                window_length -= nums[L]
                L += 1

        return 0 if total == len(nums) + 1 else total