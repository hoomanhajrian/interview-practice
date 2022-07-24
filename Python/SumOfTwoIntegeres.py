class Solution(object):
    def getSum(a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        def add(x, y):
            if (y == 0):
                return x
            else:
                # ^ (carrot) will do XOR that will result in differ in bits of two integers
                # << (shift left) EXP: x << 1: x will be shifted by 1 to the left in bits
                return add(x ^ y, (x & y) << 1)

        return add(a, b)


print(Solution.getSum(1, 2))


# DONE
