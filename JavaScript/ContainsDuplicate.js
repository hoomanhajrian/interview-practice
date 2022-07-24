const containsDuplicate = (nums) => {

    const myset = new Set(nums);

    if (myset.size === nums.length) {
        return false;
    }
    else {
        return true;
    }
};


console.log(containsDuplicate([1, 2, 3, 4]));