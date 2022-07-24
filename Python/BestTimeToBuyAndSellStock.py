def maxProfit(prices):
    """
    :type prices: List[int]
    :rtype: int
    """
    def min(arr):
        index = 0
        min = arr[index]
        for i in range(0, len(arr)):
            if(arr[i] < min):
                index = i
                min = arr[i]
            else:
                pass
        return [index, min]

    def max(arr, index):
        max = arr[index]
        for i in range(index, len(arr)):
            if (arr[i] >= max):
                index = i
                max = arr[i]
            else:
                pass
        return [index, max]

    print(min([2, 4, 1]))

    def trade(arr):
        # return max(arr, min(arr)[0]), min(arr)
        if (max(arr, min(arr)[0])[0] > min(arr)[0]):
            return max(arr, min(arr)[0])[1] - min(arr)[1]
        else:
            return 0
    return trade(prices)


print(maxProfit([2, 4, 1]))
