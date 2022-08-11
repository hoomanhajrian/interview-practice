// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    return [...Array(nums.length + 1).keys()].filter(x => !nums.includes(x))[0];
};


console.log(missingNumber([-1, -3]));