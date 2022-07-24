// Given two integers a and b, return the sum of the two integers without using the operators + and -.

const getSum = (a, b) => {
    return (a ^ b) + ((a & b) << 1);
};

console.log(getSum(12, 4));