def maxArea(height):
    """
    :type height: List[int]
    :rtype: int
    """
    # area = height*lenght

    sortedHeight = sorted(height)
    firstColumn = sortedHeight[-1]
    secondColumn = sortedHeight[-2]
    if(firstColumn == secondColumn):
        print(height.index(sortedHeight[-1]))
        height.remove(sortedHeight[-1])
        print(height.index(sortedHeight[-2]))


maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
