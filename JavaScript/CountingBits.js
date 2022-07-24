// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {

    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(i.toString(2).split("1").length - 1);
    }
    return result;
};

console.log(countBits(5));