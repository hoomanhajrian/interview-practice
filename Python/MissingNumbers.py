# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


# Example 1:

# Input: nums = [3,0,1]
# Output: 2
# Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

class Solution(object):
    def missingNumber(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        originalList = []
        for i in range(0, len(nums) + 1):
            originalList.append(i)
        return list(set(originalList) - set(nums))[0]


print(Solution.missingNumber([0, 1,2,3,4,6]))

#DONE