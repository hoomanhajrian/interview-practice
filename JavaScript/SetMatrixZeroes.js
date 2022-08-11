// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[0].length; j++) {
    //         if (matrix[i][j] === 0) {

    //         }
    //     }
    // }

    const result = matrix.find((e) => { return e === 0 })

    return result;
};

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));