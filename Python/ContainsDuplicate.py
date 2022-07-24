def containsDuplicate(nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    numsSet = set(nums)
    orderedList = list(numsSet)

    def compare(arr1, arr2):
        for i in range(0, len(arr1)):
            for j in range(0, len(arr2)):
                print([arr1[i], arr2[j]])
    return compare(orderedList, nums)


nums = [5, 2, 3, 4, 1, 2, 3]
# nums2 = [2, 3]

print(containsDuplicate(nums))
