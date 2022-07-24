# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

# Example 1:

# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10


class Solution(object):
    def countBits(n):
        """
        :type n: int
        :rtype: List[int]
        """
        list = []
        for i in range(0, n+1):
            if (0 <= i <= n):
                list.append(len(bin(i).replace("0b", "").split("1")) - 1)
            else:
                pass
        return list


print(Solution.countBits(5))


# DONE
