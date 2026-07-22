class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # Find 2 numbers in the array that are equal and are at most k + 1 apart from each other.
        window = set()
        L = 0

        for R in range(len(nums)):
            if R - L + 1 > k + 1:
                window.remove(nums[L])
                L += 1
            if nums[R] in window:
                return True
            window.add(nums[R])
        
        return False